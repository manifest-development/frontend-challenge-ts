import { type FunctionComponent } from 'react'
import * as Styled from './styles'
import Button from '../button/Button'
import avatarImage from '../../assets/katie.png'

interface ThankYouProps {
  username: string
  resetForm: () => void
}

const ThankYou: FunctionComponent<ThankYouProps> = ({ username, resetForm }) => {
  return (

     <Styled.ThankYouDiv id="thankyou-page">

      <div>
        <img src={avatarImage} alt="avatar" />
        <p>Hi, {username}, thank you for submitting the form. We will check and get back to you within 2 business days.</p>
      </div>

      <Button onClick={resetForm} id='submit-another-button'>Submit Another</Button>

      </Styled.ThankYouDiv>

  )
}

export default ThankYou
