import { test, expect } from '@playwright/test';

const testName = 'User A';
const testIncome = '40000';
const testEducation = 'High school or equivalent';

test('Demo page is loaded', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Form step 1
  console.log('Start form step 1');
  const nameInput = await page.locator('#input-name');
  await expect(nameInput).toBeInViewport();
  await nameInput.fill(testName);

  const incomeInput = await page.locator('#input-income');
  await expect(incomeInput).toBeInViewport();
  await incomeInput.fill(testIncome);

  const nextButton = await page.locator('#form-step-1-next');
  await nextButton.click();

  console.log('Complete form step 1');
  // Form step 2
  console.log('Start form step 2');

  const educationInput = await page.locator('#input-education');
  await expect(educationInput).toBeInViewport();
  await educationInput.selectOption(testEducation);

  const step2Button = await page.locator('#form-step-2-next');
  await expect(step2Button).toBeInViewport();
  await step2Button.click();

  console.log('Compete form step 2');

  // Form step 3
  console.log('Start form confirmation page');
  const confirmationPage = await page.locator('#confirmation-page');
  await expect(confirmationPage).toBeInViewport();

  const name = await page.locator('#confirmation-name');
  await expect(name).toContainText(testName);

  const income = await page.locator('#confirmation-income');
  await expect(income).toContainText(testIncome);

  const education = await page.locator('#confirmation-education');
  await expect(education).toContainText(testEducation);

  const confirmButton = await page.locator('#form-confirmation-button');
  await confirmButton.click();

  console.log('Complete form confirmation page');
  // ADD Form Thank you page test here

  console.log('Start thank you page check')
  const thankYouPage = await page.locator('#thank-you-page');
  await expect(thankYouPage).toBeInViewport();
  await expect(thankYouPage).toContainText(
    "thank you for submitting the form. We will check and get back to you within 2 business days"
  )

  const submitAnotherButton = await page.locator("#submit-another-button");
   await submitAnotherButton.click();
  await page.waitForTimeout(3000);
  const formPage = await page.locator("#input-name");
  await expect(formPage).toBeInViewport();

  console.log('Complete form and refresh form')
});
