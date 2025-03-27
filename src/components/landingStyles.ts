import styled from "styled-components";

export const LandCont = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const Welcome = styled.img`
    height: 20%;
    width: 20%;
    opacity: .8;
`
export const Logo = styled.img`
    border-radius: 50%;
    height: 25%;
    width: 25%;
`
export const Arrow = styled.img`
    height: 30%;
    width: 30%;
    animation: myfirst 1.1s infinite;
    @keyframes myfirst {
        100% {height: 32%; width: 32%;}
    }
`