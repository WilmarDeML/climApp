import styled from 'styled-components'

export const NavBarStyle = styled.nav`
    font-family: monospace;
    font-size: x-large;
    color: #F5F5F5;
    background: #364F6B;
    margin-top: 0%;
    border: .01em solid #F5F5F5;
    ul, li{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin: 0;
        padding: 0;
        gap: .5em;

        @media (max-width: 600px) {
            justify-content: flex-start;
            flex-wrap: wrap;
            gap: 1em;
            li {
                width: 100%;
            }
            .link {
                margin-left: 0;
            }
        }
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
        padding: .5em .8em;
        border-radius: .5em;
        border: .2em solid #364F6B;
        margin-left: auto;
        &:hover {
            opacity: .9;
            color: #3fc1c9;
            text-decoration: underline;
        }
    }
`