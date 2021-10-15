import styled from "styled-components"

export interface IContainerProps {
    borderLeftWidth?: string
    borderRightWidth?: string
}

export const Container = styled.div<IContainerProps>`
    border-bottom-width: 1px;
    border-bottom-color: ${props => props.theme.primaryColorBorder};
    border-bottom-style: solid;
    border-left-width: ${props => props.borderLeftWidth || '0px'};
    border-left-color: ${props => props.theme.primaryColorBorder};
    border-left-style: solid;
    border-right-width: ${props => props.borderRightWidth || '0px'};
    border-right-color: ${props => props.theme.primaryColorBorder};
    border-right-style: solid;
    padding: 10px 5px;
    display: flex;
    min-height: 50px;
`

export const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: flex-start;
`
export const Center = styled.div`
    flex: 2;
    align-items: center;
    align-content: center;
    display: flex;
    justify-content: center;
`
export const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: flex-end;
`

export interface ITitlePros {
    size?: string
}

export const Title = styled.h1<ITitlePros>`
    text-align: center;
    font-size: ${props => props.size || '1.25em'};
    color: ${props => props.theme.secondaryColorText};
    margin: 0px!important;
    padding: 0px!important;
    margin-block: 0px!important;
`