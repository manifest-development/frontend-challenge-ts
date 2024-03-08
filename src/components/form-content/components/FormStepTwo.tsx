import * as Styled from "../styles";
import Button from "../../button";
import type { User } from "../../../class/user";
import Input from "../../input";

interface FormStepTwoProps {
  localData: User;
  submitForm: () => void;
  updateField: (key: string, value: string) => void;
}

const FormStepTwo = ({ localData, submitForm, updateField }: FormStepTwoProps) => {
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
      <Button onClick={submitForm} id="form-step-2-next">
        Next
      </Button>
    </Styled.QuestionContainer>
  );
};

export default FormStepTwo;
