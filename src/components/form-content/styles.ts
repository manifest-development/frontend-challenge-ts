import styled from 'styled-components'

export const FormContentDiv = styled.div`
  display: flex;
  height: calc(100vh - 120px);
`

export const FormHeading = styled.h2`
  font-size: 28px;
  font-weight: 400;
`

export const LineParagraph = styled.p`
  &:first-child {
    margin-top: 40px;
  }
  margin: 10px 0;
  text-align: left;
  width: 100%;
  font-size: 24px;
  color: #333;
  font-weight: 500;

  span {
    width: 110px;
    display: inline-flex;
    font-weight: 300;
  }

  strong {
    margin-left: 20px;
    font-weight: 600;
  }
`

export const TextBox = styled.p`
  background: #989E8D;
  padding: 20px;
  border-radius: 10px;
  color: white;
  font-family: Gill Sans;
  font-size: 24px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;  
  text-align: left;
  width: fit-content
  }
`
