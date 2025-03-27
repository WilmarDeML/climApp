import styled from 'styled-components'

export const CityStyle = styled.div`
    font-family: monospace;
    font-size: large;
    position: relative;
    background-color: #3fc1c9;
    width: 20em;
    margin: .8em .3em;
    opacity: .9;
    border-radius: 1em;
    border: .05em solid #fc5185;
    height: fit-content;
`

export const HeadCity = styled.div`
    background-color: #f5f5f5;
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-radius: 1em 1em 0 0;
    border-top: .05em solid #f5f5f5;
    font-size: 80%;

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
        border-radius: 50%;
        opacity: .7;
        &:hover {
            transform: rotate(-360deg);
            transition: 1s;
            opacity: .9;
            cursor: pointer;
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
    font-weight: bold;
    margin-top: -1em;
    
    h4 {
        color: #364f6b;
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