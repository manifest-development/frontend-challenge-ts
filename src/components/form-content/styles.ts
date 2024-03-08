import styled from "styled-components";

export const FormContentDiv = styled.div`
  display: flex;
  height: calc(100vh - 120px);
  // height: calc(50vh - 120px);
  // border: 2px solid black;
  height: 100%;
  padding-bottom: 10px;
`;

export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 20px;
  width: 100%;
`;

export const FormHeading = styled.h2`
  font-size: 28px;
  font-weight: 400;
`;

export const LineParagraph = styled.p`
  &:first-child {
    margin-top: 40px;
  }
  margin: 10px 0;
  text-align: left;
  width: 100%;
  font-size: 24px;
  color: #333;
  font-weight: 500;

  span {
    width: 110px;
    display: inline-flex;
    font-weight: 300;
  }

  strong {
    margin-left: 20px;
    font-weight: 600;
  }
`;

export const ThankYouContainer = styled.div`
  // border: 2px solid black;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ThankYouHeading = styled.h2`
  text-align: center;
  margin-top: 10px;
  color: #333;
`;

export const MessageContainer = styled.div`
  display: flex;
  align-items: end;
  margin: 20px 0px 45px 0px;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 60px;
  }
`;

export const Message = styled.p`
  font-size: 24px;
  font-weight: 400;
  color: #fff;
  padding: 18px;
  border-radius: 30px;
  background-color: #989e8d;
  font-family: Gill Sans;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;
`;

export const ImageContainer = styled.div`
  width: 60px;
  height: 60px;
`;

export const ProfileImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin: 0 auto;
`;
