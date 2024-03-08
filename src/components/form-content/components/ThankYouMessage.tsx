import * as Styled from "../styles";
import Button from "../../button";
import katieImage from "../../../assets/katie.png";

interface ThankYouMessageProps {
  name: string;
  submitAnotherForm: () => void;
}

const ThankYouMessage = ({ name, submitAnotherForm }: ThankYouMessageProps) => {
  return (
    <Styled.ThankYouContainer>
      <h2 style={{ textAlign: "center", marginTop: "10px" }}>Thank You for Your Submission!</h2>
      <Styled.MessageContainer>
        <Styled.ImageContainer>
          <Styled.ProfileImage src={katieImage} alt="Profile Picture" />
        </Styled.ImageContainer>
        <Styled.Message>
          Hi, {name}, thank you for submitting the form. We will check and get back to you within 2 business days.
        </Styled.Message>
      </Styled.MessageContainer>
      <Button onClick={submitAnotherForm} id="submit-another-btn">
        Submit Another
      </Button>
    </Styled.ThankYouContainer>
  );
};

export default ThankYouMessage;
