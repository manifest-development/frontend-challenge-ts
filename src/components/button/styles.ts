import styled from 'styled-components'

const buttonPrimaryColor = '#7B876D'

export const Button = styled.button<{ $invert: boolean }>`
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 20px;
  font-family: inherit;
  line-height: 36px;
  display: block;
  width: 100%;
  height: 40px;
  border-radius: 10px;
  margin-bottom: 10px;

  background: ${(props) =>
    props.$invert ? 'transparent' : buttonPrimaryColor};
  border: 2px solid ${buttonPrimaryColor};
  color: ${(props) => (props.$invert ? buttonPrimaryColor : 'white')};
`
