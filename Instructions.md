# Manifest React javascript challenge

There are three exercises, should take less than 45 mins.

## Background

This is a simple form submission application. The form consists of three steps.

- Step 1: Input user's name and income
- Step 2: Education level
- Step 3: Confirmation

## Exercise 1 - Fixed a small bug

Scenario: User A is a student, so she input 0 in the income field, however, she is unable to proceed to Step 2.

To reproduce:

1. Go to form step 1
2. Type any name in the name field
3. Type 0 in the income field
4. Click on Next button
5. User is unable to proceed to step 2

Expected behaviour: User should be able to proceed to step 2

## Excerise 2 - Add new UI

Scenario: After user confirm the form in step 3, we would like to show user the thank you page after data is sent successfully.

https://www.figma.com/file/rPH6m4Zc8RE7rIj1qJqLBR/Frontend-Code-challenge?type=design&node-id=0%3A1&mode=design&t=hgtl48bT64qlXKwk-1

Expected Behaviour:

1. User should see the Thank you page when user confirm submission and saving data is successful.
2. User should see a reset form step 1 when user click on "SUBMIT ANOTHER" on the thank you page.

## Exercise 3 - Add E2E test

Scenario: After adding the thank you page, E2E tests failed.

To reproduce:

1. Run npm run start or yarn start
2. Open a second terminal, run npm run e2e or yarn e2e
3. E2E test fails because user has to click button in order to see the form step 1

Please fix E2E tests.
Playwright docs
https://playwright.dev/docs/intro
