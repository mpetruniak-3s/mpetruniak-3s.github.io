import { test } from '@playwright/test'
import { ai } from '@zerostep/playwright'

test('Hackathon', async ({ page }) => {
  await page.goto('https://mpetruniak-3s.github.io/index.html')

    // An object with page and test must be passed into every call
    const aiArgs = { page, test }
    await ai('Expect to see the "Get Started Now" button', aiArgs)
});