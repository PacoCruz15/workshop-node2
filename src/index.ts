const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://cat-bounce.com');
    await page.screenshot({ path: 'cat-ss.png' });

    await browser.close();
})();