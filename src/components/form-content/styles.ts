import styled from 'styled-components'
import { FlexDiv } from '../../layout/flex/styles'

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

export const Avatar = styled.img`
  border-radius: 50%;
  width: 60px;
  height: 60px;
  margin: 0px 31px;
`

export const Greeting = styled(FlexDiv)`
  color: #ffffff;
  max-width: 488px;
  margin-bottom: 50px;
  #greeting-msg {
    background-color: #989e8d;
    border-radius: 30px;
    padding: 12px 16px 15px 16px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    #greeting-msg {
      margin-top: 17px;
    }
  }
`
