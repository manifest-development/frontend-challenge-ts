import * as Styled from "../styles";
import Button from "../../button";
import katieImage from "../../../assets/katie.png";
import { capitalizeName } from "../../../utils";

interface ThankYouMessageProps {
  name: string;
  submitAnotherForm: () => void;
}

const ThankYouMessage = ({ name, submitAnotherForm }: ThankYouMessageProps) => {
  const formattedName = capitalizeName(name);

  return (
    <Styled.ThankYouContainer>
      <Styled.ThankYouHeading>Thank You for Your Submission!</Styled.ThankYouHeading>
      <Styled.MessageContainer>
        <Styled.ImageContainer>
          <Styled.ProfileImage src={katieImage} alt="Profile Picture" />
        </Styled.ImageContainer>
        <Styled.Message>
          Hi, {formattedName}, thank you for submitting the form. We will check and get back to you within 2 business days.
        </Styled.Message>
      </Styled.MessageContainer>
      <Button onClick={submitAnotherForm} id="submit-another-btn">
        Submit Another
      </Button>
    </Styled.ThankYouContainer>
  );
};

export default ThankYouMessage;
