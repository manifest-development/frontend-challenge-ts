# Manifest - Coding Challenge

## Installation Instructions
**To run the application locally, follow the steps below(commands added for additional help):**

1. Clone the repository into the folder locally by using git clone: 
   1. **git clone https://github.com/bartswierz/frontend-challenge-ts.git**
2. Navigate into the directory:
   1. **cd frontend-challenge-ts**
3. Install the necessary packages inside package.json:
   1. **npm install**
4. Install Playwright
   1. **npx playwright install** 
5. Start the app:
   1. **npm run start**

You're all set!

## To Run End-to-End Test with Playwright
1. Start the development server using command:
   1. **npm run start**
2. Once your application is up, run the command:
   1. **npm run e2e**
   2. This will run the created End-to-End test from the three form steps, thank you page, and then back to the start of the first step after the 'Submit Another' button in the thank you page is clicked.

### Alternative: End-to-End Test using Playwright UI 
  1. If you would like to see the End-to-End Test ran in a UI, you can use Playwright UI using the following command:
     1. **npm run e2e:ui**
     2. This will open a new window with a lot of useful tools such as running the test, being able to step through each line of the test, use an inspector for finding a locator for the tests, and so much more.
