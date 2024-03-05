import { useContext, type FunctionComponent } from 'react'
import Button from '../button'
import * as Styled from './styles'
import AgentProfilePicture from '../../assets/katie.png'
import { FormContext } from '../../context/FormProvider'

const ThankYou: FunctionComponent = () => {
  const { userData, resetData } = useContext(FormContext)
  const handleSubmitAnother = () => {
    resetData()
  }

  return (
    <Styled.ThankYouWrapper>
      <Styled.AgentBox>
        <Styled.AgentImage>
          <img src={AgentProfilePicture} alt="Agent Katie"></img>
        </Styled.AgentImage>
        <Styled.AgentText>
          Hi, {userData.name}, thank you for submitting the form. We will check
          and get back to you within 2 business days.
        </Styled.AgentText>
      </Styled.AgentBox>
      <Button onClick={handleSubmitAnother}>SUBMIT ANOTHER</Button>
    </Styled.ThankYouWrapper>
  )
}

export default ThankYou
