import { mkdir, readFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { chromium } from 'playwright-core'

const scriptDirectory = dirname(fileURLToPath(import.meta.url))
const siteDirectory = resolve(scriptDirectory, '..')
const workspaceDirectory = resolve(siteDirectory, '..')
const publicDirectory = resolve(siteDirectory, 'public')
const logoPath = resolve(workspaceDirectory, 'WebNest Design', 'WebNest W Transparente.png')
const edgeExecutable = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'

await mkdir(publicDirectory, { recursive: true })
const logoData = await readFile(logoPath)
const logoUrl = `data:image/png;base64,${logoData.toString('base64')}`

const browser = await chromium.launch({
  executablePath: edgeExecutable,
  headless: true,
  args: ['--allow-file-access-from-files'],
})

try {
  const page = await browser.newPage({ viewport: { width: 512, height: 512 }, deviceScaleFactor: 1 })
  await page.setContent(`
    <style>
      html, body { width: 512px; height: 512px; margin: 0; background: transparent; }
      body { display: grid; place-items: center; }
      img { width: 440px; height: 440px; object-fit: contain; }
    </style>
    <img src="${logoUrl}" alt="">
  `)
  await page.locator('img').evaluate((image) => image.decode())
  await page.screenshot({ path: resolve(publicDirectory, 'favicon.png'), omitBackground: true })
  console.log('created WebNest favicon')
} finally {
  await browser.close()
}
