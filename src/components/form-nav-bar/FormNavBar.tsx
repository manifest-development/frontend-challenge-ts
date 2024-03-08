import { type FunctionComponent, type ReactNode } from "react";

import Container from "../../layout/container";
import Flex from "../../layout/flex";
import * as Styled from "./styles";

interface FormStepItemProps {
  active: boolean;
  done: boolean;
  children: ReactNode;
}

const FormStepItem: FunctionComponent<FormStepItemProps> = ({ active, done, children }: FormStepItemProps) => {
  return (
    <Styled.FormStepItem $active={active} $done={done}>
      {children}
    </Styled.FormStepItem>
  );
};

interface FormNavBarProps {
  currentStep: number;
}

const FormNavBar: FunctionComponent<FormNavBarProps> = ({ currentStep }: FormNavBarProps) => {
  // Hide the FormComponent when the currentStep is 4(Thank You Message is displayed)
  if (currentStep === 4) return null;

  return (
    <Styled.FormNavBar>
      <Container>
        <Flex alignItems="center">
          <FormStepItem active={currentStep === 1} done={currentStep >= 1}>
            1
          </FormStepItem>
          <FormStepItem active={currentStep === 2} done={currentStep >= 2}>
            2
          </FormStepItem>
          <FormStepItem active={currentStep === 3} done={currentStep >= 3}>
            3
          </FormStepItem>
        </Flex>
      </Container>
    </Styled.FormNavBar>
  );
};

export default FormNavBar;
