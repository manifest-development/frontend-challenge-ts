import styled from 'styled-components'
import Flex from '../../layout/flex'
import { desktopBreakpoint } from '../../constants'

export const ThankYouPageDiv = styled.div`
  display: flex;
  height: 100vh;
`

export const ProfileImage = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
`

export const Message = styled.p`
  background-color: #989E8D;
  color: #FFFFFF;
  padding: 1rem;
  border-radius: 24px;
  text-align: left;
  font-size: 20px;
  font-family: inherit;
  line-height: 24px;
`

export const MessageDiv = styled(Flex)`
  @media only screen and (max-width: ${desktopBreakpoint}px){
    flex-direction: column;
    align-items: center;
  }
`
