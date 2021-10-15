import styled from "styled-components"

interface IPanelProps {
    display?: string
    flexDirection?: string
    width?: string
    marginLeft?: string
    marginRight?: string
    marginTop?: string
    marginBottom?: string
    paddingVertical?: string
    paddingHorizontal?: string
    alignItems?: string
    justifyContent?: string
    backgroundColor?: string
    borderTopWidth?: string
    borderTopColor?: string
    borderBottomWidth?: string
    borderBottomColor?: string
}

export const Panel = styled.div<IPanelProps>`
    display: ${props => props.display || 'flex'};
    flex-direction: ${props => props.flexDirection || 'column'};
    width: ${props => props.width || '100%'};
    margin-left: ${props => props.marginLeft || '0px'};
    margin-right: ${props => props.marginRight || '0px'};
    margin-top: ${props => props.marginTop || '0px'};
    margin-bottom: ${props => props.marginBottom || '0px'};
    padding: ${props => props.paddingVertical || '0px'} ${props => props.paddingHorizontal || '0px'};
    align-items: ${props => props.alignItems || 'center'};
    background-color: ${props => props.backgroundColor || 'transparent'};
    border-top-width: ${props => props.borderTopWidth || '0px'};
    border-top-color: ${props => props.borderTopColor || 'transparent'};
    border-top-style: ${props => props.borderTopWidth ? 'solid' : 'none'};
    border-bottom-width: ${props => props.borderBottomWidth || '0px'};
    border-bottom-color: ${props => props.borderBottomColor || 'transparent'};
    border-bottom-style: ${props => props.borderBottomWidth ? 'solid' : 'none'};
`