import styled from 'styled-components'

export const SerchCont = styled.form`
    display: flex;
    justify-content: center;
    margin-right: 1em;
    .inputButton {
        border: .1em solid #f5f5f5;
        height: 3.8em;
        &:hover {
            color: #fc5185;
            background-color: #f5f5f5;
            border-color: #3fc1c9;
        }
    }
`

export const Input = styled.input`
    font-family: monospace;
    height: 3.7em;
    padding: 0 .8em;
    align-self: center;
    background-color: #364f6b;
    border: none;
    color: #f5f5f5;
    border-radius: .5em;
    text-align: center;
    letter-spacing: 1pt;
    ::placeholder { 
        color: #3fc1c9;
        opacity: .7;
    } 
`