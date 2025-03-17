import styled from 'styled-components'

export const MyBody = styled.div`
    background-color: #364f6b;
    border-radius: 5em;
    margin: auto;
    padding: 0;
    border: .2em solid #3fc1c9;
    width: 100%;

    .back {
        position: fixed;
        display: flex;
        flex-direction: column;
        align-items: center;
        top: 1em;
        left: 1em;
        text-decoration: none;
        color: #3fc1c9;

        &:hover {
            opacity: .6;
            color: #fc5185;
        }
    }
`

export const MyDiv = styled.div`
    font-family: monospace;
    font-size: x-large;
    color: #f5f5f5;
    text-align: left;
    margin: 2em 0;
    border-radius: 3em;
    padding: 0 5%;
    h1, a{
        width: fit-content;
        text-align: center;
        text-decoration: none;
        color: #fc5185;
        &:hover {
            color: #3fc1c9;
        }
    }
    ul li{
        padding-bottom: 1em;
    }
    ol {
        padding-top: 1em;
    }

    .legend {
        margin-bottom: 4em;
        background-color:rgb(38, 42, 46);
        opacity: .5;
        border-radius: 1em;
        padding: 1em;
        text-align: center;
        border: .2em solid #3fc1c9;
    }
    
`
export const MyHeader = styled.header`
    display: flex;
    align-items: flex-start;
    margin-top: 0;
    figure {
        margin-left: auto;
        margin-right: auto;
        img {
            border-radius: 50%;
        }
    }
`

export const MyUl = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin-top: 1.5em;
    li {
        margin-right: .5em;
        width: 45%;
        align-self: center;
    }
`
