import styled from "styled-components";

export const Container = styled.div`
    flex: 1;
    display: block;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
`

export const Input = styled.input`
    width: 100% !important;
    display: block !important;
    padding: 10px !important;
    border-width: 2px !important;
    border-color: ${props => props.theme.secondaryColorBorder} !important;
    border-style: solid !important;

    &:focus {
        border-width: 2px !important;
        border-color: ${props => props.theme.secondaryColorBorder} !important;
        border-style: solid !important;
        outline: 3px solid ${props => props.theme.secondaryColorBorderOutline} !important;
    }
`