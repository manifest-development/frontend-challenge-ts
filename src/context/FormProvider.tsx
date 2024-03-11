import React, { type FunctionComponent, type PropsWithChildren, createContext, useState } from "react";
import { User } from "../class/user";

const CreateProviderValue = () => {
  const [formStep, setFormStep] = useState<number>(1);
  const [userData, setUserData] = useState<User>(new User());
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Checks that the user has filled out the information & checks the current step to ensure the user is navigated to the correct step
  const updateFormStep = (updatedUserData: User) => {
    // First Step Check
    if (updatedUserData.name && updatedUserData.income >= 0 && formStep === 1) {
      setFormStep(2);
    }

    // Second Step Check
    if (updatedUserData.education && formStep === 2) {
      setFormStep(3);
    }
  };

  // Allows user to navigate back to the previous step(1-3)
  const backToPreviousStep = () => {
    console.log("BACK BTN clicked, navigating user back to previous step");
    setFormStep((prev) => prev - 1);
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
      // Opens Thank You Page
      setFormStep(4);

      // setUserData(new User()); //resets user to default
      setIsLoading(false); // Loading turns to false afer 1500ms due tothe mockSaveData function
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

  const submitAnotherForm = () => {
    console.log("Submit Another BTN clicked, redirecting user to step 1");
    setUserData(new User()); //moved this here to reset use data when user clicks 'Submit Another' on the thank you page instead of the confirmation form
    setFormStep(1); //navigates user back to question 1
  };

  return {
    formStep,
    userData,
    setUserData,
    updateUserData,
    confirmForm,
    backToPreviousStep,
    isLoading,
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
