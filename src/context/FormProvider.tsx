import React, { type FunctionComponent, type PropsWithChildren, createContext, useState } from "react";
import { User } from "../class/user";

const CreateProviderValue = () => {
  const [formStep, setFormStep] = useState<number>(1);
  const [userData, setUserData] = useState<User>(new User());
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // const [displayThankYouPage, setDisplayThankYouPage] = useState<boolean>(false);

  //Exercise 1 -> updated form step to all 0 or more income
  const updateFormStep = (updatedUserData: User) => {
    if (updatedUserData.name && updatedUserData.income >= 0) {
      setFormStep(2);
    }
    if (updatedUserData.education) {
      setFormStep(3);
    }
  };

  const updateUserData = (updatedUserData: User) => {
    updateFormStep(updatedUserData);
    setUserData(updatedUserData);
  };

  const mockSaveData = async () =>
    // eslint-disable-next-line promise/param-names
    await new Promise((res) => {
      setTimeout(res, 1500);
    });

  const saveAndResetData = async () => {
    try {
      await mockSaveData(); //will run after user clicks Confirm
      //At this point, we consider it a success, so we can display a thank you page
      // TODO - ADD THANK YOU PAGE HERE
      //set displayThankYouPage to true
      // setDisplayThankYouPage(true);
      setFormStep(4); //navigates user to thank you page
      // RESET FORM IF USER CLICKS - 'Submit Another' inside the Thank You Page
      //May have to move this section into another function after we do 'Submit Another' on the thank you page
      // if (!displayThankYouPage) {
      // console.log("User clicked submit another, resetting form...");
      console.log("inside saveAndResetData...");
      // setUserData(new User()); //resets user to default
      //move setFormStep(1) to our new function after use clicks 'submit another'
      // setFormStep(1); //navigates user back to question 1

      setIsLoading(false); // stops loading once we are on step 1
      // }
    } catch (e) {
      console.error(e);
    }
  };

  // STEP 3 - USER SUBMITS FORM -> DISPLAY LOADING, SAVE DATA, AND RESETS BACK TO STEP 1
  const confirmForm = () => {
    setIsLoading(true);

    // THIS WILL RESET OUR FORM
    saveAndResetData();
  };

  //TODO - left off here, need to fix our 'submitAnotherForm' being missing from our types
  //TODO add a submitAnotherForm function here that will do the above
  const submitAnotherForm = () => {
    console.log("inside submitAnotherForm, redirecting user to step 1...");
    setUserData(new User()); //resets user to default
    // setUserData(new User()); //resets user to default
    setFormStep(1); //navigates user back to question 1
    // setIsLoading(false); // stops loading once we are on step 1
  };

  const backToPreviousStep = () => {
    setFormStep((prev) => prev - 1);
  };

  return {
    formStep,
    userData,
    setUserData,
    updateUserData,
    confirmForm,
    backToPreviousStep,
    isLoading,
    // Our new function to submit another form
    submitAnotherForm,
  };
};

type FormProviderValue = ReturnType<typeof CreateProviderValue>;
// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export const FormContext = createContext({} as FormProviderValue);

const FormProvider: FunctionComponent<PropsWithChildren> = ({ children }: PropsWithChildren) => {
  return <FormContext.Provider value={CreateProviderValue()}>{children}</FormContext.Provider>;
};

export default FormProvider;
