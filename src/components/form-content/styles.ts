import styled from 'styled-components'
import { desktopBreakpoint } from '../../constants'

export const FormContentDiv = styled.div`
  display: flex;
  height: calc(100vh - 120px);
`

export const FormHeading = styled.h2`
  font-size: 28px;
  font-weight: 400;
`

export const FormMessage = styled.h2`
  font-size: 24px;
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

export const SubmissionComp = styled.div`
  display: flex;
  margin-bottom: 36px;
  align-items: center;
  gap: 16px;

  p {
    text-align: left;
    width: 100%;
    font-size: 24px;
    color: #FFFFFF;
    background: #989E8D;
    font-weight: 400;
    font-family: 'Gill Sans';
    padding: 13.5px 16px;
    border-radius: 30px
  }

  img {
    height: 60px;
    width: 60px;
  }
  @media screen and (max-width: ${desktopBreakpoint - 1}px){
    flex-direction: column;
    margin-bottom: 72px;
    p {
      height: 142px;
    }
  }
`
