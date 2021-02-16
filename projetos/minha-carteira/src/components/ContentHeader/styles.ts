import styled from 'styled-components';

interface ITitleContainer {
    lineColor: string;
}

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const TitleContainer = styled.div<ITitleContainer>`
    > h1 {
        color: ${props => props.theme.colors.white};
        &::after {
            content: '';
            display: block;
            width: 55px;
            border-bottom: 8px solid ${props => props.lineColor};
        };
    }
`;

export const Controllers = styled.div`
    display: flex;
`;