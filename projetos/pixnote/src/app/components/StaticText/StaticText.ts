import styled from "styled-components"

interface IStaticTextProps {
    textAlign?: string
    textSize?: string
    width?: string
    marginLeft?: string
    marginRight?: string
    marginTop?: string
    marginBottom?: string
    bold?: boolean
    textColor?: string
}

export const StaticText = styled.div<IStaticTextProps>`
    text-align: ${props => props.textAlign || 'left'};
    font-size: ${props => props.textSize || '1em'};
    width: ${props => props.width || 'auto'};
    margin-left: ${props => props.marginLeft || '0px'};
    margin-right: ${props => props.marginRight || '0px'};
    margin-top: ${props => props.marginTop || '0px'};
    margin-bottom: ${props => props.marginBottom || '0px'};
    font-weight: ${props => props.bold ? 'bold' : 'normal'};
    color: ${props => props.textColor || props.theme.primaryColorText};
`