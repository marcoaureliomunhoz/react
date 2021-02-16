import React from 'react';
import {
    Container, Tag
} from './styles';

interface IHistoryFinancialCardProps {
    tagColor: string;
    title: string;
    subTitle: string;
    amount: string;
}

const HistoryFinancialCard: React.FC<IHistoryFinancialCardProps> = ({
    tagColor, title, subTitle, amount
}) => {
    return (
        <Container>
            <Tag color={tagColor} />
            <div>
                <span>{title}</span>
                <small>{subTitle}</small>
            </div>
            <h3>{amount}</h3>
        </Container>
    )
}

export default HistoryFinancialCard;