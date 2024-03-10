# Manifest - Coding Challenge

Coding Challenge - For convenience, I have deployed the project on Netlify(https://bartswierz-coding-challenge.netlify.app/). 
I have also added installation instructions below to be able to run the application locally for the tests.

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
3. Once your application is up, run the command:
   
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

## Thought Process - Implementation
- Going into this project, I treated it as a real-world project and knew my proactiveness would lead me to make additional changes to the codebase after the exercises were completed. I am someone who gets invested into new projects and love to think outside the box of how I can improve upon it to ensure the target users' experience is great. During my research of Manifest, I was taken back to see tpast the scope of the requirements. I thought of Manifest's target audience and how setting up for one's retirement is one of the major stressors. I made notes during the exercises of possible areas of the form process that could cause frustration and possibly have the user abandon the process. Ensuring the user goes through the entire process towards completion was something we kept in mind. The three exercises were very straightforward and took around 40-50 minutes or so to complete. As the challenge indicated that it would be relatively easy with an estimate of 45 minutes, I wanted to keep a strict deadline to ensure we deliver what was asked for first. I found a few sections that could be improved on to make the user's experience better, this was important to me as the target audience has worked hard for their money and their retirement, this should be a stress-free experience for them.
  
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
      - In this scenario, the user wouldn't know if they are being redirected to the next step or its stuck loading. The longer it tasks to get the user from A to B will decrease the chances of form completion so it is important to give users indicators of the problem. If its an empty field, we should let them know. One simple UI solution is disabling the button and reducing the opacity of the Next button.
        
        $\color{green} Solution(Completed) $: I have implemented a disabled button if the name, income, or education field is empty. The user will be able to visually see the next button with a 50% opacity and a cursor-not allowed icon when hovering over next indicating that the fields weren't completely filled out. I implemented validation for the name and income fields to only allow specific characters into them. For example, the name field only allows letters, spaces, and periods. The income field only allows numbers 0 to 9. This will help ensure the user inputs the correct values to make the process easy.

## Thought Process - Codebase Improvements
- While the starter codebase was relatively easy to navigate and easy to complete the exercises, I felt that there was room for improvement when it came to readability and maintainability. The FormContent component had so many things it was taking care of that it felt like it was too much for one component, this indicated that compentizing the sections would be beneficial. I decided to move the form steps into their own files within a components folder(/FormContent/components/...). I decided to make a components folder for child components within this folder as they directly correlated to this component and not other sections of the code. From past experience, having only one component folder containing all components quickly became filled with over 80+ components. It made organization a nightmare, so organizing the components within the parent component made it easier to keep track of everything. At first glance, a new developer being brought onto the project will be able to see that these components within the FormContent folder are child components. This made the readability of the FormComponent improve immensely, especially with being able to know which props each step required as the FromComponent had 6+ props passed. By splitting up the logic it help modularize this component and decrease the total line length from 150-170+ down to about 80 lines. 

## Thought Process - Design Choices
1. When it came to the design decisions of the application, I always keep the user experience in mind, I used the limited information that I had from the challenge instruction and the starting code as an indicator of the design direction of the application. In my previous role, I would try to avoid making assumptions by asking my UI/UX leads questions regarding the provided Figma designs to ensure we kept our assumptions to the minimum and delivered the expected design to be pixel perfect. This was important as making assumptions can cause project deadlines to be missed, wasting time refactoring the code or possibly having to restart from scratch. Its important to ensure all teams are on the same page. As this wasn't an option in the coding challenge, i did have to make those assumptions, so I treated it as a MVP(Most Viable Product) and utilized a layout that worked well for Mobile and Desktop and didn't look awkward on the display as we had a lot of white space to work with. I decided instead of centering the form in the middle of the large devices I kept it aligned to the top of the display. This made more sense as the form navbar component that contained the three form steps was intended to be displayed at the top and it didn't make sense to have a huge gap between the form steps and the form fields if we had centered it. This layout allowed the form information to be close together and required less mouse movement during the form flow keeping the user experience in mind.
2. **Form Field Focus**
   - The default fields of the form didn't include a focus as an indicator to the user where they are on the page. While this may not be a big issue for a desktop mouse-user, this can lead to frustration to the users who rely on accessibility standards when using web applcations. It is important to think about all users who rely on the application to be able to navigate through it without any hassles. I implemented this by using the brand color and added an 3px border color for field that was focused. This let users know where they were on the page if they have to navigate via keyboard or other devices instead of a mouse. Ensuring that this form is inclusive and **accessible to all users** is important and in some cases such as government sites, required by law. Not keeping accessibility in mind can cause a lot of potential users from being able to benefit from accessing help with their retirement and look elsewhere, or worse, give up on getting their retirement in order. As mentioned on the Manifest website, getting retirement taken care of is one of the major stressors for people.
4. **Thank You Page Heading**
   - Another decision was adding a heading for the thank you page that mentioned, "Thank You for Your Submission!". While it wasn't required in the instructions(& provided figma designs), this was a great way to showcase our appreciation to the user for taking the time out of their day to complete the form and reassure them that the form was submitted successfully.
6. **Possible Design Improvement**
   - One improvement if time permitted, would be to connect the form navbar steps with a thin horizontal line to give a better representation of the steps and progress the user has made. At the app start the user can make an assumption that those numbers one through three at the top of the form is the steps, but what if it indicated something else? Connecting the three steps can be a better display their intended purpose to the user.
  
## If I had more time
While we were successful in ensuring all the exercises in the requirements were complete, I still wanted to ensure we went beyond the requirements. I like to see each opportunity as an opportunity for growth, and being able to work in various codebases is a great way to grow as a developer. I genuinely enjoyed completing the exercises and thinking about how I could make the user's experience the best it could be. I get invested into all the projects I join, and always try to find ways I can help it improve. I had to make some judgement calls on which areas I could spend my limited time to showcase my abilities in the best way. Some sections I really wanted to add more to were the following:
1. **Enhanced form validation**
   - There is so much that can go into form validation that goes beyond the normal input-to-submission flow. I wanted to add **Zod** for improved form validation as I had used it in one of my personal projects and it worked so well combined with TypeScript. While I am still relatively new to Zod, the benefits it brings right from the start, is immense, I would have loved to add it to this application to be able to showcase how powerful it can be for such a small bundled size that ensures it doesn't bloat the application.
2. **Unit & Integration Tests**
   - Over the past few weeks I have really taken a deep dive into testing with one of my recent projects that will be guaranteed at least 25 unique users. This made me want to ensure I put in safety nets even though it would be an MVP(Most Viable Product), I want to try to still provide a great early experience. First impressions are important even for early stage applications. I was excited to see testing was part of the coding challenge and was my favorite part of the coding challenge. I wanted to spend more time in improving upon my current knowledge on testing and add unit and integration tests to the most critical parts of the applications.
3. **Implement Disabled Button**
   - Adding a disabled button and conditionally setting the background color of the next button between the brand color and gray would be a great indicator for the user that some field was either filled incorrectly or left empty.

## Possible Optimizations
While the coding challenge was fairly small, I do still have optimizations in mind that could help with performance in the future once it would be integrated as a feature for the application. 
1. **Lazy Load Form Components**
   - Currently, as the Form is relatively small, it would be overkill to introduce lazy loading, however, it can be beneficial once we add this feature to an application or the form content becomes much larger causing an increase in the initial loading time. Theres a chance that some users might not access all of this information, so it would be a great way to reduce their load time. As Manifest has over 285,000+ individuals who used Manifest in 2023, that can benefit a large percentage as web performance needs to be optimal. We can see the difference inside the developer tools, we can refresh and sell all the files that are being loaded with an approximate load time in milliseconds.
2. **Compress Images**
   - While we may not have large images in this coding challenge, there could be some in the future for example, in each form step, we may have a illustration image that correlates to the information that may need to be adjusted to various sizes. If we don't compress an image, it increases the load time of the application very quickly. My favorite go-to when it comes to optimize images is using TinyPNG(https://tinypng.com/), it compresses our images by over **60-80%** without losing any quality in the image. This quickly adds up as the web application grows.
3. **Reduce the number of API Calls or Limit Accessing State Management**
   - In the FormProvider, it may not be a large impact currently, but once the application grows, this can quickly cause a large performance hit if user input requires accessing our Redux Store or creates a API fetch request. Instead, we could add a debounce for the "onChange" handler, with 300-500ms delay that will update this once the user stops typing outside of the window. This may not be necessary with our currently FormContent layout, but some features may require sending the updated information to make an API call or to centralized state such as Redux, using a debounce in that case, could improve the performance greatly. I have used this technique in one of my large personal projects where the user would type into a search field that would send an API fetch that contained over 850,000+ games. The returned JSON was over 400-500 lines long so we definitely did not want to create a API call after every keystroke. We set a 300ms delay so it would only send the API call once they stopped typing for more than 300ms. This not only improved the user experience by not requiring them to click a submit button, but also dramatically improved performance by reducing the number of large API calls. 

## Usage
- **Form Step One - Name & Income**
   
  ![FormStepOne](https://github.com/bartswierz/frontend-challenge-ts/assets/100662080/0618d934-9ba0-426a-ace8-ef5a077fdb68)
  
- **Form Step Two - Education**
   
   ![FormStepTwo](https://github.com/bartswierz/frontend-challenge-ts/assets/100662080/020b6be0-0598-43d9-8d6e-ef2ddae2584c)

- **Form Step Three - Confirmation**
   
   ![FormConfirmationStep](https://github.com/bartswierz/frontend-challenge-ts/assets/100662080/f01a0200-989a-44cd-9619-07d9d341d7bb)
   
- **Thank You Page**
   
   ![ThankYouPage](https://github.com/bartswierz/frontend-challenge-ts/assets/100662080/7e20764a-b6dd-4c3a-8b80-a8d1e1a1ae6a)
   
