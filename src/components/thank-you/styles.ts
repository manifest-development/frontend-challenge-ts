import styled from 'styled-components'

export const ThankYouWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  align-items: center;
  background-color: #FFFFFF;
  height: 100vh;
  max-width: 580px;

  @media only screen and (max-width: 768px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`

export const AgentImage = styled.image`
  width: '60px'
  height: '60px'

  @media only screen and (max-width: 768px) {
      justify-content: center;
  }
`

export const AgentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 50px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

export const AgentText = styled.div`
  color: #FFFFFF;
  background-color: #989E8D;
  border-radius: 30px;
  width: 100%;
  font-weight:400px;
  margin-left: 15px;
  padding: 15px;
  font-size: 24px;

  @media only screen and (max-width: 768px) {
    margin-top: 17px;
    margin-left: 0;
    align-items: center;
  }
`
