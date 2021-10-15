import styled from "styled-components"

interface IContainerProps {
    borderLeftWidth?: string
    borderRightWidth?: string
}

export const Footer = styled.div<IContainerProps>`
    border-top-width: 1px;
    border-top-color: ${props => props.theme.primaryColorBorder};
    border-top-style: solid;
    padding: 10px 5px;
    display: flex;
    border-left-width: ${props => props.borderLeftWidth || '0px'};
    border-left-color: ${props => props.theme.primaryColorBorder};
    border-left-style: solid;
    border-right-width: ${props => props.borderRightWidth || '0px'};
    border-right-color: ${props => props.theme.primaryColorBorder};
    border-right-style: solid;
`