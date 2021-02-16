import styled from 'styled-components';

interface IContainerProps {
    color: string;
}

export const Container = styled.div<IContainerProps>`
    background-color: ${props => props.color};
    width: 32%;
    height: 150px;
    margin: 10px 0;
    color: ${props => props.theme.colors.white};
    padding: 10px;
    border-radius: 10px;
    position: relative;
    overflow: hidden;

    > img {
        position: absolute;
        height: 110%;
        right: -30px;
        top: -10px;
        opacity: 0.3;
    }

    > span {
        font-size: 1.1rem;
        font-weight: 500;
    }

    > small {
        font-size: 0.75rem;
        position: absolute;
        bottom: 10px;
    }
`;