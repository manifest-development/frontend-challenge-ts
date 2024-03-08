import * as Styled from "../styles";
import Flex from "../../../layout/flex";
import Button from "../../button";
import type { User } from "../../../class/user";
import capitalizeName from "../../../utils/capitalizeName";
import convertIncomeToUSD from "../../../utils/convertIncomeToUSD";

interface ConfirmationFormStepProps {
  localData: User;
  backToPreviousStep: () => void;
  confirmForm: () => void;
}

const ConfirmationFormStep = ({ localData, backToPreviousStep, confirmForm }: ConfirmationFormStepProps) => {
  const formattedName = capitalizeName(localData.name);
  const formattedIncome = convertIncomeToUSD(localData.income);

  return (
    <Styled.QuestionContainer id="confirmation-page">
      {/* // <Flex flexDirection="column" id="confirmation-page"> */}
      <Styled.FormHeading>Confirmation</Styled.FormHeading>
      <Flex flexDirection="column" justifyContent="flex-start" alignItems="center">
        <Styled.LineParagraph id="confirmation-name">
          <span>Name</span>:<strong>{formattedName}</strong>
        </Styled.LineParagraph>
        <Styled.LineParagraph id="confirmation-income">
          {/* <span>Income</span>:<strong>{localData.income}</strong> */}
          <span>Income</span>:<strong>{formattedIncome}</strong>
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
