/* eslint-disable multiline-ternary */
import { useEffect, useState, type FunctionComponent } from "react";
import { User } from "../../class/user";
import Container from "../../layout/container";
import * as Styled from "./styles";
import ConfirmationFormStep from "./components/ConfirmationFormStep";
import FormStepOne from "./components/FormStepOne";
import FormStepTwo from "./components/FormStepTwo";
import ThankYouMessage from "./components/ThankYouMessage";
import isNameInputValid from "../../utils/validateNameInput";

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

  // Updated field data on key change
  const updateField = (key: string, value: string) => {
    if (key === "name" && !isNameInputValid(value)) {
      return;
    }

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
