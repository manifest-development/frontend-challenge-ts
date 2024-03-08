import * as Styled from "../styles";
import Button from "../../button";
import type { User } from "../../../class/user";
import Input from "../../input";

interface FormStepTwoProps {
  localData: User;
  submitForm: () => void;
  updateField: (key: string, value: string) => void;
  backToPreviousStep: () => void;
}

const FormStepTwo = ({ localData, submitForm, updateField, backToPreviousStep }: FormStepTwoProps) => {
  return (
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
      <Button onClick={backToPreviousStep} invert id="form-confirmation-back-button">
        Back
      </Button>
      <Button onClick={submitForm} id="form-step-2-next">
        Next
      </Button>
    </Styled.QuestionContainer>
  );
};

export default FormStepTwo;