import { test } from '@playwright/test'
import { ai } from '@zerostep/playwright'

test('Hackathon', async ({ page }) => {
  await page.goto('https://mpetruniak-3s.github.io/index.html')

  // An object with page and test must be passed into every call
  const aiArgs = { page, test }
  const headerText = await ai('Get the header text', aiArgs)
  await page.goto('https://google.com/')
  await ai(`Type "${headerText}" in the search box`, aiArgs)
  await ai('Press enter', aiArgs)
  await ai('Expect to see results', aiArgs)
  await ai('Do not expect to see a link to the site', aiArgs)
});