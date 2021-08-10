import { Carousel } from 'react-responsive-carousel'
import styled from 'styled-components'

export const MyCarousel = styled(Carousel)`
    background-color: #364f6b;
    min-height: '20%';
    border-radius: 5em;
    margin: 0 1em 0 1em;
    padding: 1em;
    border: .2em solid #3fc1c9;
`

export const MyDiv = styled.div`
    font-family: monospace;
    font-size: xx-large;
    color: #f5f5f5;
    text-align: left;
    margin: 2em;
    border-radius: 3em;
    padding: 0 2.5em;    
    h1, a{
        width: fit-content;
        text-align: center;
        text-decoration: none;
        color: #fc5185;
        margin-bottom: 1em;
        &:hover {
            color: #3fc1c9;
        }
    }
    ul li{
        padding-bottom: 2em;
    }
    ol {
        padding-top: 1em;
    }
    
    `
export const MyHeader = styled.header`
    display: flex;
    align-items: center;
    margin-top: -2em;
    figure {
        width: 6em;
        height: 6em;
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
