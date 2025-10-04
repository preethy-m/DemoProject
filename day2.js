import { test, chromium } from "@playwright/test";

test("launch a page", async () => {
  const browser = await chromium.launch({ headless: false }); // set headless: true for no UI
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://www.google.com/");

  // Add any actions or asserts here if needed

  await browser.close();
});
