import styled from 'styled-components'

export const SerchCont = styled.form`
    display: flex;
    justify-content: center;
    .inputButton {
        background-color: #364F6B;
        color: #f5f5f5;
        border: .2em solid #f5f5f5;
        &:hover {
            color: #3fc1c9;
            border-color: #3fc1c9;
        }
    }
`

export const Input = styled.input`
    font-family: monospace;
    padding: 1em .8em;
    background-color: #f5f5f5;
    color: #364f6b;
    border: .2em solid #364f6b;
    border-radius: .5em;
    letter-spacing: 1pt;
    &::placeholder {
        color: #3fc1c9;
        opacity: .8;
    }
`