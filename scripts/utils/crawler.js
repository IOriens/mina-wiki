const puppeteer = require('puppeteer')

module.exports = async ({ url, callback }) => {
  const browser = await puppeteer.launch({
    // headless: false,
    // devtools: true
  })
  const page = await browser.newPage()

  page.on('console', msg => console.log('PAGE LOG:', msg.text()))
  page.once('load', () => console.log('Page loaded!'))

  await page.goto(url, { waitUntil: 'networkidle0' })

  if (callback) {
    await callback(page)
  }
  await browser.close()
}
