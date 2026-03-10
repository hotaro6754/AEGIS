const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 800 });

  await page.goto('http://localhost:3000');

  // Hero section
  await page.screenshot({ path: 'hero.png' });

  // Trust section
  await page.evaluate(() => window.scrollTo(0, 1000));
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: 'trust.png' });

  // Architecture section
  await page.evaluate(() => window.scrollTo(0, 2000));
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: 'architecture.png' });

  // Problem section
  await page.evaluate(() => window.scrollTo(0, 3000));
  await new Promise(r => setTimeout(r, 1000)); // Wait for text reveal
  await page.screenshot({ path: 'problem.png' });

  // Capabilities section
  await page.evaluate(() => window.scrollTo(0, 4500));
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: 'capabilities.png' });

  // Pricing section
  await page.evaluate(() => window.scrollTo(0, 6000));
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: 'pricing.png' });

  await browser.close();
})();
