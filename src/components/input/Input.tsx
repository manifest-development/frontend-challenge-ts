import { type ChangeEvent, type FunctionComponent, type HTMLAttributes } from 'react'
import * as Styled from './styles'

type InputProps
  = HTMLAttributes<HTMLInputElement | HTMLSelectElement> & {
    label: string
    value: string
    inputLabelCaption?: string
    id: string
    type: string
    options?: string[]
    onChange: (
      e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
    ) => void
    placeholder?: string
  }

const Input: FunctionComponent<InputProps> = ({
  type,
  label,
  onChange,
  value,
  inputLabelCaption = undefined,
  id,
  options = [],
  placeholder,
  ...inputProps
}: InputProps) => {
  if (type === 'select') {
    return (
      <Styled.InputWrapper>
        <label htmlFor={id}>
          {label} {inputLabelCaption && <span>{inputLabelCaption}</span>}
        </label>
        <Styled.InputDiv>
          <select onChange={onChange} value={value} id={id}>
            {!value && <option>Select your education level</option>}
            {options.map((option) => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </select>
        </Styled.InputDiv>
      </Styled.InputWrapper>
    )
  }

  if (type === 'number') {
    return (
      <Styled.InputWrapper>
        <label htmlFor={id}>
          {label} {inputLabelCaption && <span>{inputLabelCaption}</span>}
        </label>
        <Styled.InputDiv>
          <input
            type={type}
            min={0}
            id={id}
            onChange={onChange}
            value={value}
            {...inputProps}
          />
        </Styled.InputDiv>
      </Styled.InputWrapper>
    )}
  return (
    <Styled.InputWrapper>
      <label htmlFor={id}>
        {label} {inputLabelCaption && <span>{inputLabelCaption}</span>}
      </label>
      <Styled.InputDiv>
        <input
          type={type}
          id={id}
          onChange={onChange}
          value={value}
          {...inputProps}
        />
      </Styled.InputDiv>
    </Styled.InputWrapper>
  )
}

export default Input
