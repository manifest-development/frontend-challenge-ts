import React, { useContext } from 'react'

import Button from '../../components/button'
import { FormContext } from '../../context/FormProvider'
import Container from '../../layout/container'
import * as Styled from './styles'
import KatieImage from '../../assets/katie.png'

const ThankYouPage: React.FC = () => {
  const { resetData, userData } = useContext(FormContext)
  return (
    <Container>
      <Styled.ThankYouPageContainer>
        <div id="thank-you-page">
          <img src={KatieImage} alt="Katie" />
          <p id="thank-you-message">Hi, {userData.name}, thank you for submitting the form. We will check and get back to you within 2 business days</p>
        </div>
        {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
        <Button onClick={resetData} id="submit-another-button">Submit Another</Button>
      </Styled.ThankYouPageContainer>
    </Container>
  )
}

export default ThankYouPage
