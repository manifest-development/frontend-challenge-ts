# Manifest - Coding Challenge

Coding Challenge - For convenience, I have deployed the project on Netlify(https://bartswierz-coding-challenge.netlify.app/). If you would like to run the tests, you can follow the easy installation steps below.

## Installation Instructions
**To run the application locally, follow the steps below(commands added for additional help - ensure you are inside the Root Directory for the given commands after cloning the repo):**

1. Clone the repository into the folder locally by using git clone:
   
   ```bash
   git clone https://github.com/bartswierz/frontend-challenge-ts.git
   ```
3. Navigate into the directory:
   
   ```bash
   cd frontend-challenge-ts
   ```
4. Install the necessary packages inside package.json:
   
   ```bash
   npm install
   ```
6. Install Playwright
   
   ```bash
   npx playwright install
   ```
8. Start the app:
   
   ```bash
   npm run start
   ```

You're all set!

## To Run End-to-End Test with Playwright
1. Start the development server using command:
   ```bash
   npm run start
   ```
2. Once your application is up, run the command:
   ```bash
   npm run e2e
   ```
   1. This will run the created End-to-End test from the three form steps, thank you page, and then back to the start of the first step after the 'Submit Another' button in the thank you page is clicked.

### Alternative: End-to-End Test using Playwright UI 
  1. If you would like to see the End-to-End Test ran in a UI, you can use Playwright UI using the following command:
     ```bash
      npm run e2e:ui
      ```
       1. This will open a new window with a lot of useful tools such as running the test, being able to step through each line of the test, use an inspector for finding a locator for the tests, and so much more.

## Thought Process
1. Going into this project, I treated it as a real-world project and knew my proactiveness would lead me to make additional changes to the codebase after the exercises were completed. I am someone who gets invested into new projects and love to think outside the box of how I can improve upon it to ensure the target users' experience is great. During my research of Manifest, I was taken back to see tpast the scope of the requirements. I thought of Manifest's target audience and how setting up for one's retirement is one of the major stressors. I made notes during the exercises of possible areas of the form process that could cause frustration and possibly have the user abandon the process. Ensuring the user goes through the entire process towards completion was something we kept in mind. The three exercises were very straightforward and took around 40-50 minutes or so to complete. As the challenge indicated that it would be relatively easy with an estimate of 45 minutes, I wanted to keep a strict deadline to ensure we deliver what was asked for first. I found a few sections that could be improved on to make the user's experience better, this was important to me as the target audience has worked hard for their money and their retirement, this should be a stress-free experience for them.
  
**Some possible areas that could cause them to abandon the process that I had found were the following:**
   1. **No navigation back to step 1**
      - This can be frustrating if the user realizes they misspelled their name or added an extra zero to their income. The only way to get back to step 1 is either refresh the page or complete the form and submit another. This alone may cause them to just close out of the site.

        $\color{green} Solution(Completed) $: I refactored the 'backToPreviousStep' function in FormProvider and added the back button to our Step 2 to allow the user full control in navigating between steps 1 thru 3. The previous implementation is still inplace to ensure a user is restricted from moving on to further steps until they have filled out the necessary information for the previous step.
   
   2. **User name display wasn't capitalized**
      - The default values given by the user were displayed in the same way within the confirmation screen and the thank you message. This can make the app feel less polished and less professional.
       
        $\color{green} Solution(Completed) $: I created a utility method that capitalized the first letter of the string to work for single name or multiple. This makes it more flexible when it comes to fields such as first name, last name, full name, etc. The method checks if the name string has white spaces, if they do it indicates its a full name so we will capitalize each letter, otherwise a single name will just require the first character of the string to be capitalized(using toUpperCase()). 
   3. **Income wasn't displayed in currency format**
      - The income display can cause a bit of confusion as it doesn't really convey and display the given information in a clear way. By ensuring that we convert the given user income value via input, we can make it clear that this income is for USD.

        $\color{green} Solution(Completed) $: I created a utility method that converted the income string into a USD format for an improved display. "40000" => "$40,000.00"
   4. **No indicator that a form field was incomplete**
      - In this scenario, the user wouldn't know if they are being redirected to the next step or its stuck loading. The longer it tasks to get the user from A to B will decrease the chances of form completion so it is important to give users indicators of the problem. If its an empty field, we should notify them with a message.
        
        $\color{orange} Solution(In progress) $: If its loading, we can implement a loading icon within the button using a loading state. Keeping the user informed is important.
