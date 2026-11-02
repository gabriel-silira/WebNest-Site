import { dirname, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { chromium } from 'playwright-core'

const scriptDirectory = dirname(fileURLToPath(import.meta.url))
const siteDirectory = resolve(scriptDirectory, '..')
const workspaceDirectory = resolve(siteDirectory, '..')
const outputDirectory = resolve(siteDirectory, 'src', 'assets')
const edgeExecutable = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'

const browser = await chromium.launch({
  executablePath: edgeExecutable,
  headless: true,
  args: ['--allow-file-access-from-files'],
})

async function prepare(page) {
  await page.evaluate(async () => {
    await document.fonts?.ready
    document.querySelectorAll('.reveal, .media-reveal').forEach((element) => element.classList.add('is-visible'))
  })
}

try {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 })

  await page.goto(pathToFileURL(resolve(workspaceDirectory, 'WebNest Portifolio', 'WebNest Pizza', 'cardapio.html')).href, { waitUntil: 'networkidle' })
  await prepare(page)
  await page.locator('.menu-cat').first().screenshot({ path: resolve(outputDirectory, 'pizza-cardapio.png') })

  await page.goto(pathToFileURL(resolve(workspaceDirectory, 'WebNest Portifolio', 'WebNest Burguer', 'index.html')).href, { waitUntil: 'networkidle' })
  await prepare(page)
  await page.locator('#about .historia').screenshot({ path: resolve(outputDirectory, 'burguer-historia.png') })

  console.log('captured pizza cardapio and burguer historia')
} finally {
  await browser.close()
}
