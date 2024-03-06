/* eslint-disable multiline-ternary */
import { useEffect, useState, type FunctionComponent } from "react";
import { User } from "../../class/user";
import Container from "../../layout/container";
import Flex from "../../layout/flex";
import Button from "../button";
import Input from "../input";
import * as Styled from "./styles";

interface FormContentProps {
  currentStep: number;
  updateUserData: (updatedUser: User) => void;
  userData: User;
  confirmForm: () => void;
  backToPreviousStep: () => void;

  // TODO - Added
  submitAnotherForm: () => void;
}

const FormContent: FunctionComponent<FormContentProps> = ({
  currentStep,
  updateUserData,
  userData,
  confirmForm,
  backToPreviousStep,
  // TODO - Added
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
          <Flex flexDirection="column">
            <Styled.FormHeading>Basic Information</Styled.FormHeading>
            <Input
              label="Name"
              type="text"
              placeholder="Your name"
              onChange={(e) => {
                updateField("name", (e.target as HTMLInputElement).value);
              }}
              value={localData.name || ""}
              id="input-name"
            />
            <Input
              label="Annual Income in USD"
              type="text"
              onChange={(e) => {
                updateField("income", (e.target as HTMLInputElement).value);
              }}
              value={localData.income.toString() || ""}
              inputLabelCaption="[Input 0 if you are a student]"
              placeholder="Your income"
              id="input-income"
            />

            <Button onClick={submitForm} id="form-step-1-next">
              Next
            </Button>
          </Flex>
        ) : currentStep === 2 ? (
          <Flex flexDirection="column">
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
          </Flex>
        ) : currentStep === 3 ? (
          <Flex flexDirection="column" id="confirmation-page">
            <Styled.FormHeading>Confirmation</Styled.FormHeading>
            <Flex flexDirection="column" justifyContent="flex-start">
              <Styled.LineParagraph id="confirmation-name">
                <span>Name</span>:<strong>{localData.name}</strong>
              </Styled.LineParagraph>
              <Styled.LineParagraph id="confirmation-income">
                <span>Income</span>:<strong>{localData.income}</strong>
              </Styled.LineParagraph>
              <Styled.LineParagraph id="confirmation-education">
                <span>Education</span>:<strong>{localData.education}</strong>
              </Styled.LineParagraph>
            </Flex>
            <Button onClick={backToPreviousStep} invert id="form-confirmation-back-button">
              Back
            </Button>
            {/* After user clicks confirm, we need to display the UI component */}
            <Button onClick={confirmForm} id="form-confirmation-button">
              {/* <Button onClick={submitForm} id="form-confirmation-button"> */}
              Confirm
            </Button>
          </Flex>
        ) : (
          currentStep === 4 && (
            <div className="column">
              <Styled.FormHeading>Thank You</Styled.FormHeading>
              <p>
                Hi, {userData.name}, thank you for for submitting the form. We will check and get back to you within 2 business days.
              </p>
              {/* <Button onClick={backToPreviousStep} id="form-thank-you-submit-another"> */}
              <Button onClick={submitAnotherForm} id="form-thank-you-submit-another">
                Submit Another
              </Button>
            </div>
          )
        )}
      </Styled.FormContentDiv>
    </Container>
  );
};

export default FormContent;
