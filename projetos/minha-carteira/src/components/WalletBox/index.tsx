import React from 'react';
import CountUp from 'react-countup';
import arrowDownImg from '../../assets/arrow-down.svg';
import arrowUpImg from '../../assets/arrow-up.svg';
import dolarImg from '../../assets/dolar.svg';

import {
    Container
} from './styles';

interface IWalletBoxProps {
    title: string;
    amount: number;
    footerLabel: string;
    icon: 'dolar' | 'arrowUp' | 'arrowDown';
    color: string;
}

const WalletBox: React.FC<IWalletBoxProps> = ({
    title,
    amount,
    footerLabel,
    icon,
    color
}) => {

    const iconSelected = () => {
        if (icon === 'dolar') {
            return dolarImg;
        }

        if (icon === 'arrowDown') {
            return arrowDownImg;
        }

        if (icon === 'arrowUp') {
            return arrowUpImg;
        }
    }

    return (
        <Container color={color}>
            <span>{title}</span>
            <h1>
                <CountUp
                    end={amount}
                    prefix={'R$ '}
                    separator='.'
                    decimal=','
                    decimals={2}
                />
            </h1>
            <small>{footerLabel}</small>
            <img src={iconSelected()} alt={title} />
        </Container>
    )
}

export default WalletBox;