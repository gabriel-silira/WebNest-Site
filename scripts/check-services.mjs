import { mkdir } from 'node:fs/promises'
import { chromium } from 'playwright-core'

const baseUrl = process.env.WEBNEST_PREVIEW_URL || 'http://127.0.0.1:5173'
const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'
const browser = await chromium.launch({ executablePath: edgePath, headless: true })
await mkdir('.impeccable/review', { recursive: true })

try {
  for (const width of [1440, 768, 390, 320]) {
    const page = await browser.newPage({ viewport: { width, height: 900 }, reducedMotion: 'reduce' })
    for (const route of ['/', '/servicos/']) {
      const response = await page.goto(`${baseUrl}${route}`, { waitUntil: 'networkidle' })
      const result = await page.evaluate(() => ({
        title: document.title,
        heading: document.querySelector('h1')?.textContent,
        prices: [...document.querySelectorAll('.plan-card__price > data')].map((price) => price.textContent),
        systemStartingPrices: [...document.querySelectorAll('.plan-card__starting-price data, .services-systems__price data')].map((price) => price.textContent),
        cards: document.querySelectorAll('.plan-card').length,
        horizontalOverflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
      }))
      const expectedCards = route === '/' ? 6 : 3
      if (!response.ok() || result.cards !== expectedCards || result.horizontalOverflow > 1) {
        throw new Error(JSON.stringify({ width, route, status: response.status(), ...result }))
      }
      if (result.prices.join('|') !== 'R$ 1.290|R$ 2.190|R$ 2.890') {
        throw new Error(`Unexpected plan prices: ${result.prices.join('|')}`)
      }
      if (result.systemStartingPrices.join('|') !== 'R$ 4.900|R$ 7.900|R$ 10.000') {
        throw new Error(`Unexpected system starting prices: ${result.systemStartingPrices.join('|')}`)
      }
      const navLinks = await page.locator('.site-nav > a:not(.button)').evaluateAll((anchors) => anchors.map((anchor) => [anchor.textContent.trim(), anchor.getAttribute('href')]))
      const expectedNav = route === '/' 
        ? [['Projetos', '/#projetos'], ['Serviços', '/servicos/'], ['Investimento', '/#investimento'], ['Como funciona', '/#processo']]
        : [['Início', '/'], ['Sites', '#planos'], ['Adicionais', '#adicionais'], ['Sistemas Web', '#sistemas'], ['Condições', '#condicoes'], ['Dúvidas', '#duvidas']]
      if (JSON.stringify(navLinks) !== JSON.stringify(expectedNav)) throw new Error(`Unexpected ${route} navigation: ${JSON.stringify(navLinks)}`)
      if (route === '/servicos/') {
        const sections = await page.evaluate(() => ({
          addons: document.querySelectorAll('.services-addons__item').length,
          examples: document.querySelectorAll('.services-examples__item').length,
          dashboards: document.querySelectorAll('.services-systems__grid article').length,
          terms: document.querySelectorAll('.services-terms__list > div').length,
        }))
        if (JSON.stringify(sections) !== JSON.stringify({ addons: 8, examples: 4, dashboards: 3, terms: 6 })) {
          throw new Error(`Services sections incomplete: ${JSON.stringify(sections)}`)
        }
      }
      console.log(JSON.stringify({ width, route, status: response.status(), ...result }))
      if ([1440, 390].includes(width)) {
        await page.screenshot({ path: `.impeccable/review/${route === '/' ? 'home-plans' : 'services'}-${width}.png`, fullPage: true })
        if (route === '/servicos/') {
          await page.locator('.plan-grid').screenshot({ path: `.impeccable/review/services-plans-${width}.png` })
        }
      }
    }
    if (width === 390) {
      await page.locator('.menu-toggle').click()
      if (await page.locator('.menu-toggle').getAttribute('aria-expanded') !== 'true') throw new Error('Mobile menu did not open')
      await page.locator('.menu-toggle').click()
      const question = page.locator('.services-questions .faq__question').first()
      await question.click()
      if (await question.getAttribute('aria-expanded') !== 'true') throw new Error('Services FAQ did not open')
      await question.click()
      if (await question.getAttribute('aria-expanded') !== 'false') throw new Error('Services FAQ did not close')
      const links = await page.locator('.plan-card .button').evaluateAll((anchors) => anchors.map((anchor) => new URL(anchor.href).searchParams.get('text')))
      if (links.length !== 3 || !links.every((text) => text?.includes('proposta'))) throw new Error('Plan WhatsApp links are incomplete')
      await page.goto(`${baseUrl}/servicos/#plano-catalogo`, { waitUntil: 'networkidle' })
      await page.waitForTimeout(250)
      const cardTop = await page.locator('#plano-catalogo').evaluate((card) => card.getBoundingClientRect().top)
      if (Math.abs(cardTop) > 4) throw new Error(`Catalog hash did not align to viewport top: ${cardTop}`)
    }
    await page.close()
  }

  const motionPage = await browser.newPage({ viewport: { width: 390, height: 900 }, reducedMotion: 'no-preference' })
  await motionPage.goto(`${baseUrl}/servicos/`, { waitUntil: 'networkidle' })
  const answer = motionPage.locator('.services-questions .faq__answer').first()
  const transition = await answer.evaluate((element) => getComputedStyle(element).transitionDuration)
  if (!transition.includes('0.32s')) throw new Error(`Services FAQ lost its expansion animation: ${transition}`)
  await motionPage.locator('.services-questions .faq__question').first().click()
  await motionPage.waitForTimeout(360)
  if (!await answer.evaluate((element) => element.classList.contains('is-open') && getComputedStyle(element).opacity === '1')) throw new Error('Services FAQ animation did not reveal the answer')
  await motionPage.close()

  const journeyPage = await browser.newPage({ viewport: { width: 390, height: 900 }, reducedMotion: 'reduce' })
  await journeyPage.goto(`${baseUrl}/`, { waitUntil: 'networkidle' })
  if (await journeyPage.locator('#servicos, .service-grid, .service-summary-grid').count() !== 0 || await journeyPage.locator('.pricing-extensions article').count() !== 1 || await journeyPage.locator('.plan-grid--systems .plan-card').count() !== 3) {
    throw new Error('Home still has the duplicated services block or is missing the investment summaries')
  }
  const homeDestinations = await journeyPage.evaluate(() => ({
    siteDetails: [...document.querySelectorAll('.plan-grid--sites .plan-card .text-link')].map((link) => link.getAttribute('href')),
    systemDetails: [...document.querySelectorAll('.plan-grid--systems .plan-card .text-link')].map((link) => link.getAttribute('href')),
    summaries: [...document.querySelectorAll('.pricing-extensions .text-link')].map((link) => link.getAttribute('href')),
    servicesNav: [...document.querySelectorAll('.site-nav > a')].find((link) => link.textContent.trim() === 'Serviços')?.getAttribute('href'),
  }))
  if (homeDestinations.siteDetails.some((href) => href !== '/servicos/#planos') || homeDestinations.systemDetails.some((href) => href !== '/servicos/#sistemas') || homeDestinations.summaries.join('|') !== '/servicos/#adicionais' || homeDestinations.servicesNav !== '/servicos/') {
    throw new Error(`Unexpected home service links: ${JSON.stringify(homeDestinations)}`)
  }
  await journeyPage.locator('#plano-essencial .text-link').click()
  await journeyPage.waitForURL('**/servicos/#planos')
  const detailPlansTop = await journeyPage.locator('#planos').evaluate((section) => section.getBoundingClientRect().top)
  if (Math.abs(detailPlansTop) > 4) throw new Error(`Services detail link missed plans: ${detailPlansTop}`)
  await journeyPage.close()
} finally {
  await browser.close()
}
