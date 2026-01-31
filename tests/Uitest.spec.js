const { test, expect } = require('@playwright/test');

test('Pos_UI_0001 - Clear button clears both Singlish input and Sinhala output', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Locate Singlish input by placeholder
  const input = page.locator('textarea');

const output = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');
  // Type valid Singlish text
  await input.fill('man gedhara yanavaa');

  
//  await expect(output).not.toBeEmpty();



  // Click the Clear button (UI behavior)
  const clearButton = page.getByRole('button', { name: /clear/i }).first();
  await clearButton.click();

  // Assert Singlish input is cleared
  await expect(input).toHaveValue('');

  // Assert Sinhala output is cleared
  await expect(output).toHaveText('');
});
