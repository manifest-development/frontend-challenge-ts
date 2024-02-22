import type { User } from '../../class/user'
import React from 'react'
import katie from '../../assets/katie.png'

import { useNavigate } from 'react-router-dom'
import * as Styled from './styles'

interface FormContentProps {
  userData: User
  resetData: () => void
  backToPreviousStep: () => void
}

const ThankYou: React.FC<FormContentProps> = ({
  userData, resetData, backToPreviousStep
}: FormContentProps) => {
  const navigate = useNavigate()
  return (
    <Styled.FlexDiv>
    <Styled.WrapperFlex flexDirection='column' justifyContent='center' >
      <Styled.MessageFlex justifyContent= 'center' alignItems='end' >
      <img src={katie} alt="Profile" style={{ height: '60px', width: '60px', bottom: '0px' }}/>
      {/* <Styled.ThankYouMessageContainer> */}
      <Styled.ThankYouNote>
        Hi,{userData.name}, thank you for submitting the form.
        We will check and get back to you within 2 business days.
      </Styled.ThankYouNote>
      {/* </Styled.ThankYouMessageContainer> */}
      </Styled.MessageFlex>
      <Styled.ThankYouButton onClick={ () => { resetData(); navigate('/') } } id='submit-another'> Submit Another</Styled.ThankYouButton>
    </Styled.WrapperFlex>
    </Styled.FlexDiv>
  )
}

export default ThankYou
