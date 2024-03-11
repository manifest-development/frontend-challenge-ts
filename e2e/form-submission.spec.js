import { test, expect } from "@playwright/test";
import convertIncomeToUSD from "../src/utils/convertIncomeToUSD";

const testName = "User A";
const testIncome = "40000";
const testEducation = "High school or equivalent";

test("Demo page is loaded", async ({ page }) => {
  await page.goto("http://localhost:3000");

  // Form step 1
  console.log("Start form step 1");
  const nameInput = await page.locator("#input-name");
  await expect(nameInput).toBeInViewport();
  await nameInput.fill(testName);

  const incomeInput = await page.locator("#input-income");
  await expect(incomeInput).toBeInViewport();
  await incomeInput.fill(testIncome);

  const nextButton = await page.locator("#form-step-1-next");
  await nextButton.click();

  console.log("Complete form step 1");
  // Form step 2
  console.log("Start form step 2");

  const educationInput = await page.locator("#input-education");
  await expect(educationInput).toBeInViewport();
  await educationInput.selectOption(testEducation);

  const step2Button = await page.locator("#form-step-2-next");
  await expect(step2Button).toBeInViewport();
  await step2Button.click();

  console.log("Compete form step 2");

  // Form step 3
  console.log("Start form confirmation page");
  const confirmationPage = await page.locator("#confirmation-page");
  await expect(confirmationPage).toBeInViewport();

  const name = await page.locator("#confirmation-name");
  await expect(name).toContainText(testName);

  const income = await page.locator("#confirmation-income");
  const incomeText = await income.textContent(); // Need to use textContent() to get the text value at confirmation-income element as we are converting the value to USD so the testIncome of "40000" would not match the text value of "$40,000.00"
  const formattedIncome = convertIncomeToUSD(incomeText); // 40000 => $40,000.00
  await expect(income).toContainText(formattedIncome);

  const education = await page.locator("#confirmation-education");
  await expect(education).toContainText(testEducation);

  const confirmButton = await page.locator("#form-confirmation-button");
  await confirmButton.click();

  console.log("Complete form confirmation page");

  const submitAnotherButton = await page.locator("#submit-another-btn");
  await expect(submitAnotherButton).toBeInViewport();
  await submitAnotherButton.click();

  console.log("Submit Another Button clicked, back to form step 1");
  // Back to form step 1 and form should be reset
  await page.waitForTimeout(3000);
  const form1Input = await page.locator("#input-name");
  const nameInputValue = await form1Input.inputValue();
  await expect(form1Input).toBeInViewport();
  await expect(nameInputValue).toBe("");
});
