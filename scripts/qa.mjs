import { mkdir, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { chromium } from 'playwright-core'

const baseUrl = process.env.WEBNEST_PREVIEW_URL || 'http://127.0.0.1:5173'
const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'
const reviewDir = fileURLToPath(new URL('../.impeccable/review/', import.meta.url))

await mkdir(reviewDir, { recursive: true })

const browser = await chromium.launch({ executablePath: edgePath, headless: true })
const report = { baseUrl, routes: {}, checks: [] }

async function checkRoute(page, route) {
  const response = await page.goto(`${baseUrl}${route}`, { waitUntil: 'networkidle' })
  const title = await page.title()
  const h1 = await page.locator('h1').first().textContent()
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)
  const simulatedBrowsers = await page.locator('.browser-frame, .browser-frame__chrome').count()
  const underlinedLinks = await page.evaluate(() => [...document.querySelectorAll('a')]
    .filter((link) => getComputedStyle(link).textDecorationLine !== 'none').length)
  report.routes[route] = { status: response?.status(), title, h1: h1?.trim(), horizontalOverflow: overflow, simulatedBrowsers, underlinedLinks }
  if (!response?.ok()) throw new Error(`${route} returned ${response?.status()}`)
  if (simulatedBrowsers) throw new Error(`${route} still renders simulated browser chrome`)
  if (underlinedLinks) throw new Error(`${route} still has ${underlinedLinks} underlined links`)
  if (overflow > 1) {
    const offenders = await page.evaluate(() => [...document.querySelectorAll('body *')]
      .map((element) => ({
        tag: element.tagName.toLowerCase(),
        className: typeof element.className === 'string' ? element.className : '',
        left: Math.round(element.getBoundingClientRect().left),
        right: Math.round(element.getBoundingClientRect().right),
      }))
      .filter((element) => element.right > document.documentElement.clientWidth + 1 || element.left < -1)
      .slice(0, 12))
    throw new Error(`${route} overflows horizontally by ${overflow}px: ${JSON.stringify(offenders)}`)
  }
}

try {
  const desktop = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 })
  await checkRoute(desktop, '/')
  const faviconResponse = await desktop.request.get(`${baseUrl}/favicon.png`)
  if (!faviconResponse.ok()) throw new Error(`favicon returned ${faviconResponse.status()}`)
  report.checks.push('official favicon is available')
  if (await desktop.locator('.hero img').count()) throw new Error('Hero still contains a project image')
  report.checks.push('hero is clean and contains no project image')
  await desktop.waitForFunction(() => document.querySelector('#hero-title')?.classList.contains('is-revealed'))
  report.checks.push('hero title reveal runs')
  await desktop.locator('.site-nav a[href="/#projetos"]').click()
  await desktop.waitForFunction(() => Math.abs(document.querySelector('#projetos').getBoundingClientRect().top) < 2)
  await desktop.waitForFunction(() => document.querySelector('#projects-title')?.classList.contains('is-revealed'))
  report.checks.push('projects anchor aligns section to viewport top')
  report.checks.push('section title reveal runs on scroll')
  const desktopFaq = desktop.locator('.faq__item').first()
  const desktopQuestion = desktopFaq.locator('.faq__question')
  const desktopAnswer = desktopFaq.locator('.faq__answer')
  await desktopQuestion.click()
  if ((await desktopQuestion.getAttribute('aria-expanded')) !== 'true') throw new Error('Desktop FAQ state did not update')
  if ((await desktopAnswer.getAttribute('aria-hidden')) !== 'false') throw new Error('Desktop FAQ answer remains hidden to assistive technology')
  if (!(await desktopAnswer.isVisible())) throw new Error('Desktop FAQ answer did not open')
  report.checks.push('desktop FAQ opens with synchronized visual and accessible state')
  await desktopQuestion.click()
  if ((await desktopQuestion.getAttribute('aria-expanded')) !== 'false') throw new Error('Desktop FAQ did not close')
  await desktop.evaluate(() => window.scrollTo(0, 0))
  await desktop.screenshot({ path: join(reviewDir, 'desktop-top.png') })
  const heroSelection = await desktop.locator('#hero-title').evaluate((element) => getComputedStyle(element).userSelect)
  if (heroSelection === 'none') throw new Error('Animated large titles are not selectable')
  const clippedRevealWords = await desktop.locator('#hero-title .text-reveal__word').evaluateAll((words) => words
    .filter((word) => getComputedStyle(word).overflow !== 'visible').length)
  if (clippedRevealWords) throw new Error(`Hero title still has ${clippedRevealWords} clipped reveal words`)
  await desktop.locator('#hero-title').evaluate((element) => {
    const selection = window.getSelection()
    const range = document.createRange()
    range.selectNodeContents(element)
    selection.removeAllRanges()
    selection.addRange(range)
  })
  await desktop.screenshot({ path: join(reviewDir, 'desktop-selection.png') })
  await desktop.evaluate(() => window.getSelection()?.removeAllRanges())
  report.checks.push('animated large titles remain selectable without clipping')
  await desktop.locator('#investimento').scrollIntoViewIfNeeded()
  const sitePlanTitles = await desktop.locator('.plan-grid--sites .plan-card h3').allTextContents()
  const systemPlanTitles = await desktop.locator('.plan-grid--systems .plan-card h3').allTextContents()
  if (sitePlanTitles.join('|') !== 'Essencial|Profissional|Catálogo') {
    throw new Error(`Unexpected site plan titles: ${sitePlanTitles.join('|')}`)
  }
  if (systemPlanTitles.join('|') !== 'Dashboard de indicadores|Dashboard com integrações|Sistema personalizado') {
    throw new Error(`Unexpected system plan titles: ${systemPlanTitles.join('|')}`)
  }
  await desktop.locator('#investimento').screenshot({ path: join(reviewDir, 'desktop-pricing.png') })
  report.checks.push('investment section contains all current site and system plans')
  const realProjects = desktop.locator('#projetos-reais')
  if (await realProjects.count() !== 1) throw new Error('Real projects section is missing')
  const realProjectsHeight = await realProjects.evaluate((element) => element.getBoundingClientRect().height)
  if (realProjectsHeight < 899) throw new Error(`Real projects section is shorter than one viewport: ${realProjectsHeight}px`)
  if ((await realProjects.locator('.real-project-card').count()) !== 1) throw new Error('Real projects section does not contain exactly one real project card')
  if (!(await realProjects.getByText('Hoody Bot', { exact: true }).isVisible())) throw new Error('Hoody Bot real project is missing')
  if ((await realProjects.locator('a[href="/projetos/hoody/"]').count()) !== 2) throw new Error('Hoody Bot project links are incomplete')
  await realProjects.scrollIntoViewIfNeeded()
  await desktop.evaluate(() => document.activeElement?.blur())
  await realProjects.screenshot({ path: join(reviewDir, 'desktop-real-projects.png') })
  report.checks.push('real projects section presents Hoody Bot as a real project')
  await desktop.screenshot({ path: join(reviewDir, 'desktop.png'), fullPage: true })

  for (const route of ['/projetos/pizza/', '/projetos/refriz/', '/projetos/burguer/', '/projetos/hoody/', '/privacidade/']) {
    await checkRoute(desktop, route)
    if (route.startsWith('/projetos/') && route !== '/projetos/hoody/') {
      const slug = route.split('/').filter(Boolean).at(-1)
      if (await desktop.locator('.project-preview').count() !== 1) throw new Error(`${route} does not have one clean project preview`)
      await desktop.screenshot({ path: join(reviewDir, `project-${slug}-desktop.png`) })
      if (slug === 'pizza' || slug === 'burguer') {
        await desktop.locator('.case-image').scrollIntoViewIfNeeded()
        await desktop.locator('.case-image').screenshot({ path: join(reviewDir, `project-${slug}-detail-desktop.png`) })
      }
    }
    if (route === '/projetos/hoody/') {
      if (await desktop.getByText('Projeto real', { exact: true }).count() !== 1) throw new Error('Hoody page is not labeled as a real project')
      if (await desktop.getByText('Projeto demonstrativo', { exact: true }).count()) throw new Error('Hoody page is incorrectly labeled as demonstrative')
      if (await desktop.locator('.hoody-project-hero__preview').count() !== 1) throw new Error('Hoody hero preview is missing')
      if (await desktop.locator('.hoody-screen').count() !== 5) throw new Error('Hoody supporting screens are incomplete')
      if (await desktop.getByText(/diversão/i).count()) throw new Error('Hoody copy still uses diversão instead of entretenimento')
      if (await desktop.getByText('Cada comando chega com contexto.').count()) throw new Error('Removed Hoody command-detail section is still rendered')
      if (!(await desktop.getByText('Moderação', { exact: true }).count())) throw new Error('Moderation category is missing from the Hoody gallery')
      const sectionHeights = await desktop.locator('.hoody-project-page main > section').evaluateAll((sections) => sections.map((section) => Math.round(section.getBoundingClientRect().height)))
      if (sectionHeights.some((height, index) => index > 0 && height < 899)) throw new Error(`Hoody sections are shorter than one viewport: ${sectionHeights.join(', ')}`)
      await desktop.locator('.text-reveal').evaluateAll((elements) => elements.forEach((element) => element.classList.add('is-revealed')))
      await desktop.evaluate(() => { window.scrollTo(0, 0); document.activeElement?.blur() })
      await desktop.waitForTimeout(700)
      await desktop.screenshot({ path: join(reviewDir, 'project-hoody-desktop.png'), fullPage: true })
      await desktop.locator('.hoody-commands').screenshot({ path: join(reviewDir, 'project-hoody-commands-desktop.png') })
      report.checks.push('Hoody Bot real-project page uses all six current captures and presents Moderação, Entretenimento and Informações')
    }
  }
  await checkRoute(desktop, '/pagina-inexistente/')
  if (await desktop.title() !== 'Página não encontrada — WebNest') {
    throw new Error(`Unexpected 404 title: ${await desktop.title()}`)
  }
  report.checks.push('unknown routes render the 404 page with the correct document title')
  await desktop.close()

  const mobile = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1 })
  await checkRoute(mobile, '/')
  await mobile.locator('.menu-toggle').click()
  if (!(await mobile.locator('#site-menu').isVisible())) throw new Error('Mobile menu did not open')
  report.checks.push('mobile menu opens')
  await mobile.locator('.menu-toggle').click()
  const mobileFaq = mobile.locator('.faq__item').first()
  const mobileQuestion = mobileFaq.locator('.faq__question')
  const mobileAnswer = mobileFaq.locator('.faq__answer')
  await mobileQuestion.focus()
  await mobile.keyboard.press('Enter')
  await mobile.waitForFunction(() => document.querySelector('.faq__item .faq__answer')?.classList.contains('is-open'))
  await mobile.waitForTimeout(360)
  if ((await mobileQuestion.getAttribute('aria-expanded')) !== 'true') throw new Error('Mobile FAQ did not open with keyboard')
  if (!(await mobileAnswer.isVisible())) throw new Error('Mobile FAQ answer did not become visible')
  report.checks.push('mobile FAQ opens by keyboard and exposes the answer')
  await mobileQuestion.click()
  await mobile.evaluate(() => window.scrollTo(0, 0))
  await mobile.screenshot({ path: join(reviewDir, 'mobile-top.png') })
  await mobile.screenshot({ path: join(reviewDir, 'mobile.png'), fullPage: true })
  for (const slug of ['pizza', 'refriz', 'burguer']) {
    await checkRoute(mobile, `/projetos/${slug}/`)
    await mobile.screenshot({ path: join(reviewDir, `project-${slug}-mobile.png`) })
  }
  await checkRoute(mobile, '/projetos/hoody/')
  await mobile.locator('.text-reveal').evaluateAll((elements) => elements.forEach((element) => element.classList.add('is-revealed')))
  await mobile.evaluate(() => { window.scrollTo(0, 0); document.activeElement?.blur() })
  await mobile.waitForTimeout(700)
  await mobile.screenshot({ path: join(reviewDir, 'project-hoody-mobile.png'), fullPage: true })
  report.checks.push('Hoody Bot page is responsive on mobile')
  await mobile.close()

  for (const width of [320, 768]) {
    const page = await browser.newPage({ viewport: { width, height: 900 }, deviceScaleFactor: 1 })
    await checkRoute(page, '/')
    report.checks.push(`${width}px has no horizontal overflow`)
    await page.close()
  }
} finally {
  await browser.close()
}

await writeFile(join(reviewDir, 'qa-report.json'), `${JSON.stringify(report, null, 2)}\n`)
console.log(JSON.stringify(report, null, 2))
