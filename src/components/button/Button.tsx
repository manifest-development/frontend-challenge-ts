import { type HTMLAttributes, type FunctionComponent, type ReactNode } from "react";
import * as Styled from "./styles";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  invert?: boolean;
  children: ReactNode;
  disabled?: boolean;
}

const Button: FunctionComponent<ButtonProps> = ({ invert, children, onClick, disabled = false, id, ...props }: ButtonProps) => {
  return (
    <Styled.Button onClick={onClick} $invert={invert || false} {...props} disabled={disabled}>
      {children}
    </Styled.Button>
  );
};

export default Button;
