import styled from 'styled-components'

export const InputWrapper = styled.div`
display:flex;
width:100%;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
margin-bottom: 20px;
label{
    margin-bottom: 12px;
    color: #333;
    margin-left: 8px;

    span{
        font-size: 16px;
        color: #777;
    }
}
input, select{
    width:100%;
    font-size: 20px;
    border:none;
    outline:none;
    height: 32px;
    background:transparent;
    padding: 8px;
}

select{
    padding:2px 8px;
}`

export const InputDiv = styled.div`
border: 1px solid #555;
width:100%;
border-radius: 12px;
height: 45px;
display:flex;
align-items:center;
`
