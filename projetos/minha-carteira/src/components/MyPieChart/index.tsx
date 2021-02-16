import React from 'react';
import {
    Container,
    SideLeft,
    LegendContainer,
    MyLegend,
    SideRight
} from './styles';
import { 
    PieChart,
    Pie,
    ResponsiveContainer,
    Cell
} from 'recharts';

interface IMyPieChartProps {
    data: {
        label: string;
        value: number;
        percent: number;
        color: string;
    }[]
}

const MyPieChart: React.FC<IMyPieChartProps> = ({
    data
}) => (
    <Container>
        <SideLeft>
            <h2>Relação</h2>
            <LegendContainer>
                {
                    data.map((item, index) => (
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
        </SideLeft>
        <SideRight>
            <ResponsiveContainer>
                <PieChart>
                    <Pie
                        data={data}
                        labelLine={false}
                        dataKey='percent'
                    >
                        {
                            data.map((item, index) => (
                                <Cell
                                    key={index}
                                    fill={item.color}
                                />
                            ))
                        }
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </SideRight>
    </Container>
);

export default MyPieChart;