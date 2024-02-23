import styled from 'styled-components'
import { desktopBreakpoint } from '../../constants'

export const ThankYouPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #FFFFFF;
  height: 100vh;
  @media (max-width: 768px) {
    max-width: 80%;
    gap: 50px;
  }

  div {
    display: flex;
    gap: 20px;
    align-items: flex-end;
    margin-bottom: 40px;
    @media only screen and (max-width: ${desktopBreakpoint}px) {
      flex-direction: column;
      align-items: center;
      margin-bottom: 0;
    }  
  }

  img {
    width: 55px;
    height: 55px;
    @media only screen and (max-width: ${desktopBreakpoint}px) {
      aligh-items: end;
    }
  }

  p {
    background: #989E8D;
    text-align: left;
    font: Gill Sans, sans-serif;
    font-size: 24px;
    line-height: 30px;
    font-weight: 400;
    border-radius: 30px;
    padding: 15px 40px;
  }
`
