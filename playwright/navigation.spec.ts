import { expect, test } from '@playwright/test';

test('navigation test', async ({ page }) => {
  await page.goto('/');

  // await expect(
  //   page.getByRole('heading', { name: 'Welcome to Cornafy Yoga!' }),
  // ).toBeVisible();

  // test if images are visible
  await expect(
    page.getByRole('img', { name: /Group Yoga Image/ }).first(),
  ).toBeVisible();
});
