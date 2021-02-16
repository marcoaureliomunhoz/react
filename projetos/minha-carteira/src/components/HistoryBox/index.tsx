import React from 'react';
import { 
    Container,
    Header,
    Body,
    GraphContainer,
    LegendContainer,
    MyLegend
} from './styles';
import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip
} from 'recharts';
import formatCurrency from '../../utils/formatCurrency';

export interface IHistoryBoxData {
    month: string;
    amountEntry: number;
    amountOutput: number;
}

interface IHistoryBoxProps {
    data: IHistoryBoxData[],
    lineColorAmountEntry: string;
    lineColorAmountOutput: string;
    legendData: {
        label: string;
        value: number;
        percent: number;
        color: string;
    }[];
}

const HistoryBox: React.FC<IHistoryBoxProps> = ({
    data, lineColorAmountEntry, lineColorAmountOutput, legendData
}) => (
    <Container>
        <Header>
            <h2>Histórico de saldo</h2>
        </Header>
        <Body>
            <LegendContainer>
                {
                    legendData.map((item, index) => (
                        <MyLegend
                            key={index}
                            color={item.color}
                        >
                            <div>{item.percent}%</div>
                            <span>{item.label}</span>
                        </MyLegend>
                    ))
                }
            </LegendContainer>
            <GraphContainer>
                <ResponsiveContainer>
                    <LineChart data={data} margin={{top:10, right:10, left:10, bottom: 5}}>
                        <CartesianGrid 
                            strokeDasharray='3 3'
                            stroke='#cecece'
                        />
                        <XAxis
                            dataKey='month'
                        />
                        <Tooltip
                            formatter={(value: number) => formatCurrency(+value)}
                        />
                        <Line
                            type='monotone'
                            dataKey='amountEntry'
                            name='Entradas'
                            stroke={lineColorAmountEntry}
                            strokeWidth={5}
                            dot={{r:5}}
                            activeDot={{r:8}}
                        />
                        <Line
                            type='monotone'
                            dataKey='amountOutput'
                            name='Saídas'
                            stroke={lineColorAmountOutput}
                            strokeWidth={5}
                            dot={{r:5}}
                            activeDot={{r:8}}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </GraphContainer>
        </Body>
    </Container>
);

export default HistoryBox;