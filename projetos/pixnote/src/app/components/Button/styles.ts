import styled from "styled-components";

interface IClickableProps {
    width?: string
    marginBottom?: string
}

export const Clickable = styled.button<IClickableProps>`
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px 10px;
    border: 2px solid ${props => props.theme.secondaryColorBorder};
    border-radius: 5px;
    font-weight: bold;
    font-size: 1em;
    cursor: pointer;
    width: ${props => props.width || 'auto'};
    background-color: ${props => props.theme.secondaryColor}; 
    margin-bottom: ${props => props.marginBottom || '0px'};
`