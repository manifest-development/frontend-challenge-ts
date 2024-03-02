import styled from 'styled-components'
import { desktopBreakpoint } from '../../constants'

export const MessagePanel = styled.div`
  margin-top:240px;

  @media(max-width: ${desktopBreakpoint}px) {
    width:400px;
    align-items: center;
    display:flex;
    flex-direction:column;
    margin-left: auto;
    margin-right: auto;
    }
`

export const MessageComponents = styled.div`
display: flex;
p{
    background-color: #939879;
    color: white;
    padding: 12px;
    border-radius: 24px;
    font-size: 24px;
    margin:24px;
}

img{
    width:78px;
    height:78px;
    margin-top:42px;
}

@media(max-width: ${desktopBreakpoint}px) {
    flex-direction:column;
    width:424px;
    align-items: center
}

`
