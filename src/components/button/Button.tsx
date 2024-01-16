import { type HTMLAttributes, type FunctionComponent, type ReactNode } from 'react'
import * as Styled from './styles'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  invert?: boolean
  children: ReactNode
}

const Button: FunctionComponent<ButtonProps> = ({
  invert,
  children,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <Styled.Button onClick={onClick} $invert={invert || false} {...props}>
      {children}
    </Styled.Button>
  )
}

export default Button
