import { test } from '@playwright/test'
import { ai } from '@zerostep/playwright'

test('Start Form', async ({ page }) => {
    await page.goto('https://mpetruniak-3s.github.io/index.html')
    
    // An object with page and test must be passed into every call
    const aiArgs = { page, test }
    await ai('Expect to see the "Start Form" button', aiArgs)
    await ai('Click the "Start Form" button', aiArgs)
    //await ai('Expect to see the "First Name" field', aiArgs)
    await ai('Enter "Person" in the "First Name" field', aiArgs)
    await ai('Click the "Next" button', aiArgs)
    //await ai('Expect to see the "Email" field', aiArgs)
    await ai('Enter "test@test.com" in the "Email" field', aiArgs)
    await ai('Click the "Next" button', aiArgs)
    //await ai('Expect to see the "Address" field', aiArgs)
    await ai('Enter "123 Test St" in the "Address" field', aiArgs)
    await ai('Click the "Next" button', aiArgs)
    //await ai('Expect to see the "Phone Number" field', aiArgs)
    await ai('Enter "1234567890" in the "Phone Number" field', aiArgs)
    await ai('Click the "Next" button', aiArgs)
    //await ai('Expect to see the "Zip Code" field', aiArgs)
    await ai('Enter "12345" in the "Zip Code" field', aiArgs)
    await ai('Click the "Next" button', aiArgs)
    //await ai('Expect to see the "Are you a home owner?" question', aiArgs)
    await ai('Click the "Yes" button', aiArgs)
    //await ai('Expect to see the "Square Footage:" question', aiArgs)
    await ai('Click the "500-1200" button', aiArgs)
    //await ai('Expect to see the "How many rooms?" question', aiArgs)
    await ai('Click the "1-2" button', aiArgs)
    //await ai('Expect to see the "Preferred Color Scheme:" field', aiArgs)
    await ai('Enter "Blue" in the "Preferred Color Scheme:" field', aiArgs)
    await ai('Click the "Next" button', aiArgs)
    //await ai('Expect to see "Rooms Needing Advice:" field', aiArgs)
    await ai('Click checkbox for "Living Room"', aiArgs)
    await ai('Click the "Submit" button', aiArgs)
    await ai('Expect to see the "Form submitted! We will get in touch with you soon" message', aiArgs)
});