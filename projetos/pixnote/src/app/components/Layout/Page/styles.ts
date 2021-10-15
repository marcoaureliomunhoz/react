import { isMobile, isSafari } from "react-device-detect"
import styled from "styled-components"


export const Container = styled.div`
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: row;
    height: ${isMobile && isSafari ? '88vh' : '100vh'};
    overflow: hidden;

    width: 30%;
    
    @media screen and (max-width: 1700px) {
        width: 35%;
    }

    @media screen and (max-width: 1500px) {
        width: 40%;
    }

    @media screen and (max-width: 1300px) {
        width: 50%;
    }

    @media screen and (max-width: 1100px) {
        width: 60%;
    }

    @media screen and (max-width: 900px) {
        width: 80%;
    }

    @media screen and (max-width: 700px) {
        width: 100%;
    }
`

interface IAnimationProps {
    showSide?: string
}

export const Content = styled.div<IAnimationProps>`
    position: relative;
    width: 100%;
    min-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    left: -300px;
    transform: ${props => props.showSide === 'left' ? 'translateX(+300px)' : props.showSide === 'right' ? 'translateX(-300px)' : 'none'};
    transition: ease-out 200ms;
`

export const SideLeft = styled.div<IAnimationProps>`
    position: relative;
    min-width: 300px;
    width: 300px;
    left: -300px;
    transform: ${props => props.showSide === 'left' ? 'translateX(+300px)' : props.showSide === 'right' ? 'translateX(-300px)' : 'none'};
    transition: ease-out 200ms;
    display: flex;
    flex-direction: column;
    background-color: transparent;
`

export const SideRight = styled.div<IAnimationProps>`
    position: relative;
    min-width: 300px;
    width: 300px;
    left: -300px;
    transform: ${props => props.showSide === 'left' ? 'translateX(+300px)' : props.showSide === 'right' ? 'translateX(-300px)' : 'none'};
    transition: ease-out 200ms;
    display: flex;
    flex-direction: column;
    background-color: transparent;
`