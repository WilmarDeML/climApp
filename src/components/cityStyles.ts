import styled from 'styled-components'

export const CityStyle = styled.div`
    font-family: monospace;
    font-size: large;
    position: relative;
    background-color: #364f6b;
    width: 20em;
    margin: .8em .3em;
    opacity: .9;
    border-radius: 1em;
    border: .05em solid #fc5185
`

export const HeadCity = styled.div`
    background-color: #f5f5f5;
    display: flex;
    justify-content: space-between;
    width: 100%;

    .link {
        margin-left: 3em;
        text-decoration: none;
        color: #364f6b;

        &:hover {
            opacity: .9;
            color: #fc5185;
        }
    }

    img {
        height: 5em;
        width: 5em;
        background-color: #f5f5f5;
        border-radius: 50%;
        &:hover {
            transform: rotate(-360deg);
            transition: 1s;
        }
    }

    button {
        padding: 0;
        border: none;
        border-radius: 50%;
    }
`

export const BodyStyle = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    color: #f5f5f5;
    margin-top: -1em;
    
    h4 {
        color: #3fc1c9;
    }

    div {
        display: flex;
        width: 100%;
        justify-content: space-evenly;
    }

    img {
        margin-top: .2em;
    }

    label {
        padding-bottom: .5em;
        text-transform: capitalize;
    }
`