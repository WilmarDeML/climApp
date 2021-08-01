import styled from 'styled-components'

export const DetailCont = styled.section`
    font-family: monospace;
    font-size: x-large;
    position: absolute;
    color: #3fc1c9;;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    background-color: #f5f5f5;
    justify-content: space-between;
    align-items: center;
    button {
        border: none;
        background-color: #f5f5f5;
        position: absolute;
        left: 3em;
        top: .5em;
        border-radius: 50%;
        img {
            height: 4em;
            width: 4em;
            &:hover {
            transform: rotate(-360deg);
            transition: .3s;
        }
        }  
    }
    h1 {
        margin-top: 0;
        background-color: #f5f5f5;
        width: 100%;
        padding: 2em 0;
    }
    h3, h4 {
        font-size: xx-large;
    }
    h3, label {
        padding: 0 1em;
    }
`
export const Coordinates = styled.div`
    height: 100%;
    color: #364f6b;
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    flex-wrap: wrap;
    align-items: center;
    background-color: #fc5185;
`
export const WindCont = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
    background-color: #3fc1c9;
    height: 100%;
    flex-wrap: wrap;
    color: #f5f5f5;
    img {
        width: 2em;
        height: 2em;
    }
`
export const Main = styled.div`
    color: #fc5185;
    height: 100%;
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
    background-color: #364f6b;
    flex-wrap: wrap;
    padding: 3em 0 3em 0;
`
export const MainItems = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    margin-top: -1em;
    div {
        position: relative;
    }
    img {
        width: 1em;
        height: 1em;
    }
    h4 {
        padding-right: 2.5em;
    }
`
export const MinMaxTemp = styled.div`
    /* width: 150%; */
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    position: absolute;
    right: 3em;
    label {
        padding-left: 2em;
    }
`