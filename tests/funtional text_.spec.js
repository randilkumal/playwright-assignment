//funtional text_.spec.js


const { test, expect } = require('@playwright/test');
const testCases = require('./inputs');

test.describe('Singlish to Sinhala functional test', () => {

    test.afterAll(async() => {
        console.log("all done")
    })

  for (const t of testCases) {
    test(t.id, async ({ page }) => {
      await page.goto("https://www.swifttranslator.com/");

      const input = page.locator('textarea').first();
      await input.fill(t.input);


      const output = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');
      await expect(output).not.toBeEmpty({timeout: 3000});
      const actualOutput = await output.textContent();

      console.log(t.id);
      console.log('Expected:', t.expected);
      console.log('Actual:', actualOutput);

      expect(actualOutput).toContain(t.expected);
    });
  }
});



