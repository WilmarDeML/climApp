import styled from 'styled-components'

export const NavBarStyle = styled.nav`
    font-family: monospace;
    font-size: x-large;
    color: #F5F5F5;
    background-color: #3FC1C9;
    margin-top: 0%;
    border-radius: .5em;
    border: .01em solid #FC5185;
    ul, li{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin: 0 .2em;
    }
    img{
        width: 2em;
        height: 2em;
        border-radius: 1em;
    }
    .link {
        text-decoration: none;
        color: #F5F5F5;
        background-color: #364F6B;
        padding: .7em .5em;
        margin: 0 .2em;
        border-radius: .2em;
        &:hover {
            opacity: .9;
            color: #FC5185;
        }
    }
`