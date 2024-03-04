import { type FunctionComponent } from 'react'
import Button from '../button'
import Container from '../../layout/container'
import Flex from '../../layout/flex'
import profileImageSrc from '../../assets/katie.png'
import * as Styled from './styles'

interface ThankYouPageProps {
  userName: string
  resetForm: () => void
}

const ThankYouPage: FunctionComponent<ThankYouPageProps> = ({
  userName, resetForm
}: ThankYouPageProps) => {
  return (
      <Container>
          <Styled.ThankYouPageDiv id="thank-you-page">
              <Flex flexDirection="column" alignItems="center" justifyContent="center" gap="40px">
                  <Styled.MessageDiv gap="20px" alignItems="flex-end" justifyContent="space-between" id="response-message-div">
                      <Styled.ProfileImage src={profileImageSrc} alt="Katie's Profile" id="katie-profile-image" />
                      <Styled.Message id="thank-you-message-div">
                          Hi, {userName}, thank you for submitting the form.
                          We will check and get back to you within 2 business days.
                      </Styled.Message>
                  </Styled.MessageDiv>
                  <Button onClick={resetForm} id="submit-another-button">SUBMIT ANOTHER</Button>
              </Flex>
          </Styled.ThankYouPageDiv>
      </Container>
  )
}

export default ThankYouPage
