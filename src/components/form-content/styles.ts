import styled from 'styled-components'

export const FormContentDiv = styled.div`
  display: flex;
  height: calc(100vh - 120px);
`

export const FormHeading = styled.h2`
  font-size: 28px;
  font-weight: 400;
`

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
`
export const ThankYouContent = styled.div`
  background: #989E8D;
  color: #FFFFFF;
  width: 100%;
  height:auto;
  border-radius: 30px;
  font-size: 24px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;
  padding:15px;
`
export const UserImage = styled.div`
  margin-right:10px;
  img{
    width:60px;
    height:60px;
    margin-top:90%;
  }
  @media (max-width: 768px){
    margin-right: 0;
  }  
`
