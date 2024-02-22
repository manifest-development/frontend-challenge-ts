import styled from 'styled-components'
import Button from '../button'
import Flex from '../../layout/flex'
import { desktopBreakpoint } from '../../constants'

export const FlexDiv = styled.div`
  height: 100vh;
  width: 100vw;
`
export const ThankYouMessageContainer = styled.div`
  background: #989E8D;
  border-radius: 10px;
  padding: 20px;
  width: 488px;
  height: 117px; 

`
export const ThankYouNote = styled.p`
  color: #FFFFFF;
  background: #989E8D;
  padding: 14px;
  border-radius: 30px;
  font-size: 24px;
  width: 488px;
  height: 117px; 
  font-weight: 400;
  line-height: 30px;

  @media only screen and (max-width: ${desktopBreakpoint}px){
    width: 330px;
    height: 142px;
   
  }
`
export const ThankYouButton = styled(Button)`
  display: block;
  width: 580px;
  height: 40px;

  @media only screen and (max-width: ${desktopBreakpoint}px){
    width: 330px;
    height: 40px;
   
  }
`
export const WrapperFlex = styled(Flex)`
  gap: 45px;
`
export const MessageFlex = styled(Flex)`
  gap: 20px;
  @media only screen and (max-width: ${desktopBreakpoint}px){
    flex-direction: column;
    align-items: center;
  }
`
