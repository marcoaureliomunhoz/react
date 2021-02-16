import styled from 'styled-components';

interface IMyLegendProps {
    color: string;
}

export const Container = styled.div`
    background-color: ${props => props.theme.colors.tertiary};
    width: 100%;
    height: 250px;
    margin: 10px 0;
    color: ${props => props.theme.colors.white};
    padding: 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.colors.tertiary};
        border-radius: 10px;
    }

    ::-webkit-scrollbar-track {
        background-color: ${props => props.theme.colors.secondary};
    }
`;

export const Header = styled.header`
    margin-bottom: 10px;
`;

export const Body = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
    overflow-x: auto;

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.colors.tertiary};
        border-radius: 10px;
    }

    ::-webkit-scrollbar-track {
        background-color: ${props => props.theme.colors.secondary};
    }
`;

export const GraphContainer = styled.div`
    padding-right: 5px;
    display: flex;
    flex: 1;
`;

export const LegendContainer = styled.ul`
    list-style: none;
    min-width: 130px;
    max-width: 130px;
    overflow-y: auto;
    padding-right: 15px;
    padding-top: 10px;

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.colors.tertiary};
        border-radius: 10px;
    }

    ::-webkit-scrollbar-track {
        background-color: ${props => props.theme.colors.secondary};
    }
`;

export const MyLegend = styled.li<IMyLegendProps>`
    display: flex;
    align-items: center;
    margin-bottom: 7px;

    > div {
        background-color: ${props => props.color};
        width: 40px;
        height: 40px;
        border-radius: 5px;
        font-size: 18px;
        line-height: 40px;
        text-align: center;
    }

    > span {
        margin-left: 10px;
    }
`;