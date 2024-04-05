import { test, expect } from '@playwright/test'

test('get started link', async ({ page }) => {
  await page.goto('http://localhost:3000/')

  await expect(page.getByTestId('counter-view')).toBeVisible()
  await expect(page.getByTestId('counter-view')).toHaveText('0')

  await page.getByRole('button', { name: /Contador em/i }).click()

  await expect(page.getByTestId('counter-view')).toHaveText('1')
})
