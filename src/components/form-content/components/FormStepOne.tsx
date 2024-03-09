import * as Styled from "../styles";
import Button from "../../button";
import type { User } from "../../../class/user";
import Input from "../../input";
import { useState, useEffect } from "react";

interface FormStepOneProps {
  localData: User;
  submitForm: () => void;
  updateField: (key: string, value: string) => void;
}

const FormStepOne = ({ localData, submitForm, updateField }: FormStepOneProps) => {
  // console.log("local data: ", localData);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    localData.name && localData.income >= 0 ? setIsDisabled(false) : setIsDisabled(true);
  }, [localData]);

  const handleSubmit = () => {
    if (!localData.name) return;

    if (localData.name && localData.income > -1) submitForm();
  };

  return (
    <Styled.QuestionContainer>
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

      {/* <Button onClick={submitForm} id="form-step-1-next" data-testid="form-step-1-next"> */}
      <Button
        onClick={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        id="form-step-1-next"
        data-testid="form-step-1-next"
        disabled={isDisabled}
      >
        Next
      </Button>
    </Styled.QuestionContainer>
  );
};

export default FormStepOne;
