import { mkdir } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { chromium } from 'playwright-core'

const scriptDirectory = dirname(fileURLToPath(import.meta.url))
const siteDirectory = resolve(scriptDirectory, '..')
const workspaceDirectory = resolve(siteDirectory, '..')
const outputDirectory = resolve(siteDirectory, 'src', 'assets')
const edgeExecutable = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'

const projects = [
  ['pizza', resolve(workspaceDirectory, 'WebNest Portifolio', 'WebNest Pizza', 'index.html')],
  ['refriz', resolve(workspaceDirectory, 'WebNest Portifolio', 'WebNest Refriz', 'index.html')],
  ['burguer', resolve(workspaceDirectory, 'WebNest Portifolio', 'WebNest Burguer', 'index.html')],
]

await mkdir(outputDirectory, { recursive: true })

const browser = await chromium.launch({
  executablePath: edgeExecutable,
  headless: true,
  args: ['--allow-file-access-from-files'],
})

try {
  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1,
  })

  for (const [slug, indexPath] of projects) {
    await page.goto(pathToFileURL(indexPath).href, { waitUntil: 'networkidle' })
    await page.evaluate(async () => {
      await document.fonts?.ready
      document.querySelectorAll('.reveal').forEach((element) => element.classList.add('is-visible'))
    })
    await page.screenshot({
      path: resolve(outputDirectory, `${slug}-home.png`),
      fullPage: false,
    })
    console.log(`captured ${slug}`)
  }
} finally {
  await browser.close()
}
