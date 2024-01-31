import { type FunctionComponent } from 'react'
import Container from '../../layout/container'
import katie from '../../assets/katie.png'
import Button from '../button'
import './ThankYouPage.css'

interface ThankYouProps {
  thankyou: boolean
  userName: string
  endThankYou: () => void
}

const ThankYouPage: FunctionComponent<ThankYouProps> = ({ thankyou, userName, endThankYou }: ThankYouProps) => {
  return (
    <Container>
        <div className="container">
            <div className="main-content">
                <div className="message-section">
                    <img alt="" className="avatar" src={katie} />
                    <div className='message'>
                        Hi, {userName}, thank you for submitting the form. We will check and get back to you within 2 business days.
                    </div>
                </div>

                <Button className='submit-button' onClick={endThankYou}>SUBMIT ANOTHER</Button>
            </div>
        </div>
    </Container>
  )
}

export default ThankYouPage
