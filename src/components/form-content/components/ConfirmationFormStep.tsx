import * as Styled from "../styles";
import Flex from "../../../layout/flex";
import Button from "../../button";
import type { User } from "../../../class/user";

interface ConfirmationFormStepProps {
  // localData: {
  //   name: string;
  //   income: string;
  //   education: string;
  // };
  localData: User;
  backToPreviousStep: () => void;
  confirmForm: () => void;
}

const ConfirmationFormStep = ({ localData, backToPreviousStep, confirmForm }: ConfirmationFormStepProps) => {
  return (
    <Styled.QuestionContainer id="confirmation-page">
      {/* // <Flex flexDirection="column" id="confirmation-page"> */}
      <Styled.FormHeading>Confirmation</Styled.FormHeading>
      <Flex flexDirection="column" justifyContent="flex-start" alignItems="center">
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
    </Styled.QuestionContainer>
  );
};

export default ConfirmationFormStep;
