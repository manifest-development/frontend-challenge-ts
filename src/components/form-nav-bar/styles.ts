import styled from 'styled-components'

const itemHeight = 30
const activeItemColor = '#7B876D'
const inactiveItemColor = '#989E8D'

export const FormNavBar = styled.div`
width: 100%;
display:flex;
padding-top: 30px;
padding-bottom: 40px;`

export const FormStepItem = styled.div<{ $active: boolean, $done: boolean }>`
background: ${(props) => (props.$active || props.$done ? activeItemColor : inactiveItemColor)};
opacity: ${(props) => (props.$active || props.$done ? '1' : '0.45')};
border-radius: 100%;
width: ${itemHeight}px;
height:${itemHeight}px;
line-height: ${itemHeight}px;
text-align:center;
font-weight: 500;
color: white;

`
