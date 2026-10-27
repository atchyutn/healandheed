/**
 * Visual QA screenshots.
 * Usage:
 *   PLAYWRIGHT_MODULE=/path/to/playwright node scripts/shoot.mjs [paths...]
 * Defaults to every route at desktop + mobile widths.
 */
import { mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';

const modulePath = process.env.PLAYWRIGHT_MODULE || 'playwright';
const { chromium } = await import(modulePath);

const base = process.env.SITE_URL || 'http://localhost:4321';
const routes = process.argv.slice(2);
const pages =
  routes.length > 0
    ? routes
    : ['/', '/about/', '/services/', '/online-sessions/', '/summer-program/', '/group-therapies/', '/contact/', '/404'];

const outDir = resolve('screens');
await mkdir(outDir, { recursive: true });

const browser = await chromium.launch();
const viewports = [
  { name: 'desktop', width: 1440, height: 900, isMobile: false },
  { name: 'mobile', width: 390, height: 844, isMobile: true },
];

for (const vp of viewports) {
  const context = await browser.newContext({
    viewport: { width: vp.width, height: vp.height },
    deviceScaleFactor: 1,
    isMobile: vp.isMobile,
    hasTouch: vp.isMobile,
    reducedMotion: 'reduce',
  });
  const page = await context.newPage();
  for (const route of pages) {
    const name = route === '/' ? 'home' : route.replaceAll('/', '') || 'home';
    await page.goto(`${base}${route}`, { waitUntil: 'networkidle' });
    await page.evaluate(async () => {
      await document.fonts.ready;
      document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'));
      const step = window.innerHeight * 0.8;
      for (let y = 0; y < document.body.scrollHeight; y += step) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 60));
      }
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(600);
    await page.screenshot({
      path: resolve(outDir, `${name}-${vp.name}.png`),
      fullPage: true,
    });
    console.log(`shot ${route} (${vp.name})`);
  }
  await context.close();
}

await browser.close();
