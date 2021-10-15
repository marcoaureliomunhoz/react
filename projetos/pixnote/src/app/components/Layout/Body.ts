import styled from "styled-components";

interface IContainerProps {
    borderLeftWidth?: string
    borderRightWidth?: string
}

export const Body = styled.div<IContainerProps>`
    display: flex;
    flex: 1;
    overflow-y: auto;
    padding: 10px 5px;
    flex-direction: column;
    border-left-width: ${props => props.borderLeftWidth || '0px'};
    border-left-color: ${props => props.theme.primaryColorBorder};
    border-left-style: solid;
    border-right-width: ${props => props.borderRightWidth || '0px'};
    border-right-color: ${props => props.theme.primaryColorBorder};
    border-right-style: solid;
`