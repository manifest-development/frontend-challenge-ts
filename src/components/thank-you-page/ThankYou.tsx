import { type FunctionComponent } from 'react'
import Container from '../../layout/container'
import Button from '../../components/button'
import * as Styled from './styles'
import avatarImage from '../../assets/katie.png'

interface ThankYouProps {
  username: string
  confirmForm: () => void
}

const ThankYou: FunctionComponent<ThankYouProps> = ({ username, confirmForm }: ThankYouProps) => {
  return (
    <Container>
      <Styled.MessagePanel id="thank-you-container">
      <Styled.MessageComponents>
        <img src={avatarImage} alt="avatar" />
        <p>Hi, {username}, thank you for submitting the form. We will check and get back to you within 2 business days.</p>
      </Styled.MessageComponents>
      <Button onClick={confirmForm} id="confirmation">Submit Another</Button>
      </Styled.MessagePanel>
    </Container>
  )
}

export default ThankYou
