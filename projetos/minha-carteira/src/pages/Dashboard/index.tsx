import React, { useMemo, useState, useEffect } from 'react';
import { Container, Content } from './styles';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import { gains } from '../../repositories/gains';
import { expenses } from '../../repositories/expenses';
import { getDateObject } from '../../utils/dateHelper';
import WalletBox from '../../components/WalletBox';
import MessageBox from '../../components/MessageBox';
import happyImg from '../../assets/happy.svg';
import sadImg from '../../assets/sad.svg';
import MyPieChart from '../../components/MyPieChart';
import HistoryBox, {IHistoryBoxData} from '../../components/HistoryBox';
import { listOfMonths } from '../../utils/listOf';

interface IData {
    description: string;
    amount: string;
    frequency: string;
    date: string;
}

interface ITotals {
    expenses: number;
    percentExpenses: number;
    gains: number;
    percentGains: number;
    balance: number;
    totalExpenses: number;
    totalPercentExpenses: number;
    totalGains: number;
    totalPercentGains: number;
    totalBalance: number;
}

const Dashboard: React.FC = () => {

    // estados do componente

    const [ data, setData ] = useState<IData[]>([]);
    const [ monthSelected, setMonthSelected ] = useState<number>(new Date().getMonth() + 1);
    const [ yearSelected, setYearSelected ] = useState<number>(new Date().getFullYear());

    // constantes e propriedades

    // ao sofrer alterações

    const years = useMemo(() => {
        let uniqueYears: number[] = [];

        data.forEach(item => {
            const dateObject = getDateObject(item.date);
            
            if (!uniqueYears.includes(dateObject.year)) {
                uniqueYears.push(dateObject.year);
            }
        });

        return uniqueYears.map(year => {
            return {
                value: year,
                label: year,
            }
        });
    }, [data]);

    const months = useMemo(() => {
        let uniqueMonths: number[] = [];

        data.forEach(item => {
            const dateObject = getDateObject(item.date);
            
            if (!uniqueMonths.includes(dateObject.month)) {
                uniqueMonths.push(dateObject.month);
            }
        });

        return listOfMonths.filter(m => uniqueMonths.includes(m.value));
    }, [data]);

    const totals: ITotals = useMemo(() => {
        const totalExpensesOfMonthYear = getTotal(expenses, yearSelected, monthSelected);
        const totalGainsOfMonthYear = getTotal(gains, yearSelected, monthSelected);
        const totalOfMonthYear = totalExpensesOfMonthYear + totalGainsOfMonthYear;

        const totalExpensesOfYear = getTotal(expenses, yearSelected, 0);
        const totalGainsOfYear = getTotal(gains, yearSelected, 0);
        const totalOfYear = totalExpensesOfYear + totalGainsOfYear;

        return {
            expenses: totalExpensesOfMonthYear,
            percentExpenses: +((totalExpensesOfMonthYear * 100) / totalOfMonthYear).toFixed(0),
            gains: totalGainsOfMonthYear,
            percentGains: +((totalGainsOfMonthYear * 100) / totalOfMonthYear).toFixed(0),
            balance: totalGainsOfMonthYear - totalExpensesOfMonthYear,

            totalExpenses: totalExpensesOfYear,
            totalPercentExpenses: +((totalExpensesOfYear * 100) / totalOfYear).toFixed(0),
            totalGains: totalGainsOfYear,
            totalPercentGains: +((totalGainsOfYear * 100) / totalOfYear).toFixed(0),
            totalBalance: totalGainsOfYear - totalExpensesOfYear,
        }
    }, [yearSelected, monthSelected]);

    const message = useMemo(() => {
        if (totals.balance < 0) {
            return {
                title: 'Nossa!',
                description: 'Sua carteira está negativa!',
                footerText: 'Considere fazer um empréstimo.',
                icon: sadImg,
            }
        }
        return {
            title: 'Muito bem!',
            description: 'Sua carteira está positiva!',
            footerText: 'Continue assim. Considere investir seu saldo.',
            icon: happyImg,
        }
    }, [totals]);

    const myPieData = useMemo(() => {
        const values = [
            {
                label: 'Entradas',
                value: totals.gains,
                percent: totals.percentGains || 0,
                color: '#00f'
            },
            {
                label: 'Saídas',
                value: totals.expenses,
                percent: totals.percentExpenses || 0,
                color: '#f00'
            }
        ];
        return values;
    }, [totals]);

    const myHistoryLegendData = useMemo(() => {
        const values = [
            {
                label: 'Entradas',
                value: totals.totalGains,
                percent: totals.totalPercentGains || 0,
                color: '#00f'
            },
            {
                label: 'Saídas',
                value: totals.totalExpenses,
                percent: totals.totalPercentExpenses || 0,
                color: '#f00'
            }
        ];
        return values;
    }, [totals]);

    const historyData: IHistoryBoxData[] = useMemo(() => {
        let history: IHistoryBoxData[] = [];
        listOfMonths.forEach((month, index) => {
            const totalGainsOfMonthYear = getTotal(gains, yearSelected, month.value);
            const totalExpensesOfMonthYear = getTotal(expenses, yearSelected, month.value);

            history.push({
                month: month.label.substr(0, 3),
                amountEntry: totalGainsOfMonthYear,
                amountOutput: totalExpensesOfMonthYear
            });
        });
        return history;
    }, [yearSelected])

    function getTotal(
        list: IData[],
        selectedYear: number,
        selectedMonth: number
    ): number {
        return list.filter(item => {
            const dateObject = getDateObject(item.date);
            if (selectedMonth === 0) {
                return dateObject.year === selectedYear;    
            }
            return dateObject.year === selectedYear
                && dateObject.month === selectedMonth;
        }).reduce((total, item) => 
            total += +item.amount
        , 0);
    };

    // ao criar o componente

    useEffect(() => {
        setData([...expenses, ...gains]);
    }, []);

    // outros métodos

    // renderização

    return (
        <Container>
            <ContentHeader title='Dashboard' lineColor='#fa0'>
                <SelectInput
                    options={months}
                    defaultValue={monthSelected}
                    onChange={(e) => setMonthSelected(+e.target.value)}
                />
                <SelectInput
                    options={years}
                    defaultValue={yearSelected}
                    onChange={(e) => setYearSelected(+e.target.value)}
                />
            </ContentHeader>

            <Content>
                <WalletBox
                    title={'entradas'}
                    amount={+totals.gains}
                    footerLabel={'Atualizado com base nas entradas e saídas'}
                    icon='arrowUp'
                    color='#0a0'
                />
                <WalletBox
                    title={'saídas'}
                    amount={+totals.expenses}
                    footerLabel={'Atualizado com base nas entradas e saídas'}
                    icon='arrowDown'
                    color='#f00'
                />
                <WalletBox
                    title={'saldo'}
                    amount={+totals.balance}
                    footerLabel={'Atualizado com base nas entradas e saídas'}
                    icon='dolar'
                    color='#00f'
                />

                <MessageBox
                    title={message.title}
                    description={message.description}
                    footerText={message.footerText}
                    icon={message.icon}
                />

                <MyPieChart data={myPieData} />

                <HistoryBox
                    data={historyData}
                    legendData={myHistoryLegendData}
                    lineColorAmountEntry={'#00f'}
                    lineColorAmountOutput={'#f00'}
                />
            </Content>
        </Container>
    )
}

export default Dashboard;