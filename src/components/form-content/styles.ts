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
