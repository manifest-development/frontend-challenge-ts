/* eslint-disable multiline-ternary */
import { useEffect, useState, type FunctionComponent } from "react";
import { User } from "../../class/user";
import Container from "../../layout/container";
import * as Styled from "./styles";
import { FormStepOne, FormStepTwo, ConfirmationFormStep, ThankYouMessage } from "./components";
import { isNameValid, isIncomeValid } from "../../utils";

interface FormContentProps {
  currentStep: number;
  updateUserData: (updatedUser: User) => void;
  userData: User;
  confirmForm: () => void;
  backToPreviousStep: () => void;
  submitAnotherForm: () => void;
}

const FormContent: FunctionComponent<FormContentProps> = ({
  currentStep,
  updateUserData,
  userData,
  confirmForm,
  backToPreviousStep,
  submitAnotherForm,
}: FormContentProps) => {
  const [localData, setLocalData] = useState(userData);

  useEffect(() => {
    console.log("userData: ", userData);
    setLocalData(userData);
  }, [userData]);

  // Updates User Data & Navigates User to the next step
  const submitForm = () => {
    // e.preventDefault();
    updateUserData(new User(localData));
  };

  // Possible Improvement: Separate update fields for name, income, and education to avoid the if statements. Alternative #2: use a switch statement if we have more than 3 fields in the future.
  const updateField = (key: string, value: string) => {
    if (key === "name" && !isNameValid(value)) return;

    if (key === "income" && !isIncomeValid(value)) return;

    // input is Education
    console.log("updateField: [key]:", key, "value:", value);
    setLocalData({ ...localData, [key]: value });
  };

  return (
    <Container>
      <Styled.FormContentDiv>
        {currentStep === 1 ? (
          <FormStepOne localData={localData} submitForm={submitForm} updateField={updateField} />
        ) : currentStep === 2 ? (
          <FormStepTwo
            localData={localData}
            submitForm={submitForm}
            updateField={updateField}
            backToPreviousStep={backToPreviousStep}
          />
        ) : currentStep === 3 ? (
          <ConfirmationFormStep localData={localData} backToPreviousStep={backToPreviousStep} confirmForm={confirmForm} />
        ) : (
          currentStep === 4 && <ThankYouMessage name={localData.name} submitAnotherForm={submitAnotherForm} />
        )}
      </Styled.FormContentDiv>
    </Container>
  );
};

export default FormContent;
