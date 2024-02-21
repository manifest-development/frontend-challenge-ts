import styled from 'styled-components'
import { desktopBreakpoint } from '../../constants'

const itemHeight = 60

export const ThankYouDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 45px;
height: 100dvh;
max-width: 580px;
margin-inline: auto;

@media only screen and (max-width: ${desktopBreakpoint}px) {
    max-width: 80%;
    gap: 64px;
}

div {
    display: flex;
    align-items: center;
    gap: 30px;

    @media only screen and (max-width: ${desktopBreakpoint}px) {
        flex-direction: column;
        gap: 16px;
    }
}

img {
    width: ${itemHeight}px;
    height: ${itemHeight}px;
    border-radius: 50%;
    
    @media only screen and (min-width: ${desktopBreakpoint}px) {
        align-self: end;
    }
}

p {
    color: white;
    background: #989E8D;
    padding: 14px;
    border-radius: 30px;
    font-size: 24px;
    font-weight: 400;
    line-height: 30px;
}
`
