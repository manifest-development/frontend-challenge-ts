/* eslint-disable multiline-ternary */
import { useEffect, useState, type FunctionComponent } from "react";
import { User } from "../../class/user";
import Container from "../../layout/container";
// import Flex from "../../layout/flex";
import Button from "../button";
import Input from "../input";
import * as Styled from "./styles";
import katieImage from "../../assets/katie.png";
import ConfirmationFormStep from "./components/ConfirmationFormStep";
import FormStepOne from "./components/FormStepOne";

interface FormContentProps {
  currentStep: number;
  updateUserData: (updatedUser: User) => void;
  userData: User;
  confirmForm: () => void;
  backToPreviousStep: () => void;

  //* Added
  submitAnotherForm: () => void;
}

const FormContent: FunctionComponent<FormContentProps> = ({
  currentStep,
  updateUserData,
  userData,
  confirmForm,
  backToPreviousStep,
  //* ADDED FOR THE THANK YOU PAGE
  submitAnotherForm,
}: FormContentProps) => {
  const [localData, setLocalData] = useState(userData);

  useEffect(() => {
    console.log("userData: ", userData);
    setLocalData(userData);
  }, [userData]);

  const submitForm = () => {
    console.log("user submitted form - localData: ", localData);
    updateUserData(new User(localData));
  };

  // Updated field data on key change
  const updateField = (key: string, value: string) => {
    console.log("updateField: [key]:", key, "value:", value);
    setLocalData({ ...localData, [key]: value });
  };

  return (
    <Container>
      <Styled.FormContentDiv>
        {currentStep === 1 ? (
          <FormStepOne localData={localData} submitForm={submitForm} updateField={updateField} />
        ) : currentStep === 2 ? (
          <Styled.QuestionContainer>
            <Styled.FormHeading>Education Level</Styled.FormHeading>
            <Input
              label="Education Level"
              type="select"
              options={[
                "High school or equivalent",
                "Associate degree",
                "Bachelor's degree",
                "Master's degree or above",
                "None of the above",
              ]}
              onChange={(e) => {
                updateField("education", (e.target as HTMLSelectElement).value);
              }}
              value={localData.education}
              id="input-education"
            />
            <Button onClick={submitForm} id="form-step-2-next">
              Next
            </Button>
          </Styled.QuestionContainer>
        ) : currentStep === 3 ? (
          <ConfirmationFormStep localData={localData} backToPreviousStep={backToPreviousStep} confirmForm={confirmForm} />
        ) : (
          currentStep === 4 && (
            <Styled.ThankYouContainer>
              <Styled.MessageContainer>
                <Styled.ImageContainer>
                  <Styled.ProfileImage src={katieImage} alt="Profile Picture" />
                </Styled.ImageContainer>
                <Styled.Message>
                  Hi, {userData.name}, thank you for submitting the form. We will check and get back to you within 2 business days.
                </Styled.Message>
              </Styled.MessageContainer>
              <Button onClick={submitAnotherForm} id="submit-another-btn">
                Submit Another
              </Button>
            </Styled.ThankYouContainer>
          )
        )}
      </Styled.FormContentDiv>
    </Container>
  );
};

export default FormContent;

// export const ConfirmationPage = ({ localData, backToPreviousStep, confirmForm }) => {
//   return (
//     <Styled.QuestionContainer id="confirmation-page">
//       {/* // <Flex flexDirection="column" id="confirmation-page"> */}
//       <Styled.FormHeading>Confirmation</Styled.FormHeading>
//       <Flex flexDirection="column" justifyContent="flex-start" alignItems="center">
//         <Styled.LineParagraph id="confirmation-name">
//           <span>Name</span>:<strong>{localData.name}</strong>
//         </Styled.LineParagraph>
//         <Styled.LineParagraph id="confirmation-income">
//           <span>Income</span>:<strong>{localData.income}</strong>
//         </Styled.LineParagraph>
//         <Styled.LineParagraph id="confirmation-education">
//           <span>Education</span>:<strong>{localData.education}</strong>
//         </Styled.LineParagraph>
//       </Flex>
//       <Button onClick={backToPreviousStep} invert id="form-confirmation-back-button">
//         Back
//       </Button>
//       {/* After user clicks confirm, we need to display the UI component */}
//       <Button onClick={confirmForm} id="form-confirmation-button">
//         {/* <Button onClick={submitForm} id="form-confirmation-button"> */}
//         Confirm
//       </Button>
//     </Styled.QuestionContainer>
//   );
// };
