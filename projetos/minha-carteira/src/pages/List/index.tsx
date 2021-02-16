import React, { useMemo, useState, useEffect } from 'react';
import ContentHeader from '../../components/ContentHeader';
import HistoryFinancialCard from '../../components/HistoryFinancialCard';
import SelectInput from '../../components/SelectInput';
import { gains } from '../../repositories/gains';
import { expenses } from '../../repositories/expenses';
import formatCurrency from '../../utils/formatCurrency';
import formatDate from '../../utils/formatDate';
import { getDateObject } from '../../utils/dateHelper';

import { Container, Content, Filters } from './styles';

interface IRouteParams {
    match: {
        params: {
            type: string;
        };
    }
}

interface IData {
    description: string;
    amountFormatted: string;
    frequency: string;
    dateFormatted: string;
    tagColor: string;
}

const List: React.FC<IRouteParams> = ({ match }) => {

    // estados do componente

    const [ data, setData ] = useState<IData[]>([]);
    const [ monthSelected, setMonthSelected ] = useState<number>(new Date().getMonth() + 1);
    const [ yearSelected, setYearSelected ] = useState<number>(new Date().getFullYear());
    const [ frequencyFilterSelected, setFrequencyFilterSelected ] = useState(['recorrente', 'eventual']);

    // constantes e propriedades

    const movimentType = match.params.type;

    // ao sofrer alterações

    const memo = useMemo(() => {
        if (movimentType === 'entry-balance') {
            return {
                title: 'Entradas',
                lineColor: '#00f',
                entries: gains
            };
        }
        return {
            title: 'Saídas',
            lineColor: '#f00',
            entries: expenses
        };
    }, [ movimentType ]);

    const years = useMemo(() => {
        let uniqueYears: number[] = [];

        memo.entries.forEach(item => {
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
    }, [memo]);

    const months = useMemo(() => {
        const allMonths = [
            { value: 1, label: 'Janeiro' },
            { value: 2, label: 'Fevereiro' },
            { value: 3, label: 'Março' },
            { value: 4, label: 'Abril' },
            { value: 5, label: 'Maio' },
            { value: 6, label: 'Junho' },
            { value: 7, label: 'Julho' },
            { value: 8, label: 'Agosto' },
            { value: 9, label: 'Setembro' },
            { value: 10, label: 'Outubro' },
            { value: 11, label: 'Novembro' },
            { value: 12, label: 'Dezembro' },
        ];
    
        let uniqueMonths: number[] = [];

        memo.entries.forEach(item => {
            const dateObject = getDateObject(item.date);
            
            if (!uniqueMonths.includes(dateObject.month)) {
                uniqueMonths.push(dateObject.month);
            }
        });

        return allMonths.filter(m => uniqueMonths.includes(m.value));
    }, [memo]);

    // ao criar o componente

    useEffect(() => {
        const listFiltered = memo.entries.filter(item => {
            const dateObject = getDateObject(item.date);
            return dateObject.year === +yearSelected
                && dateObject.month === +monthSelected
                && frequencyFilterSelected.includes(item.frequency);
        });
        const list = listFiltered.map(item => {
            return {
                description: item.description,
                amountFormatted: formatCurrency(+item.amount),
                frequency: item.frequency,
                dateFormatted: formatDate(item.date),
                tagColor: item.frequency === 'recorrente' ? "#4e41f0" : '#e4455d'
            }
        });
        setData(list);
    }, [memo, monthSelected, yearSelected, frequencyFilterSelected]);

    // outros métodos

    const handleFrequencyClick = (frequency: string = '') => {
        const alreadySelected = frequencyFilterSelected.findIndex(f => f === frequency) >= 0;

        if (!alreadySelected) {
            setFrequencyFilterSelected(prev => [...prev, frequency]);
        } else {
            const newSelectedFrequency = frequencyFilterSelected.filter(f => f !== frequency);
            setFrequencyFilterSelected(newSelectedFrequency);
        }
    }

    // renderização

    return (
        <Container>
            <ContentHeader title={memo.title} lineColor={memo.lineColor}>
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

            <Filters>
                <button
                    type='button'
                    className={
                        `tag-filter tag-filter-recurrent 
                        ${frequencyFilterSelected.includes('recorrente') 
                            ? 'tag-actived' : ''}`
                    }
                    onClick={() => handleFrequencyClick('recorrente')}
                >Recorrentes</button>
                <button
                    type='button'
                    className={
                        `tag-filter tag-filter-eventual 
                        ${frequencyFilterSelected.includes('eventual')
                            ? 'tag-actived' : ''}`
                    }
                    onClick={() => handleFrequencyClick('eventual')}
                >Eventuais</button>
            </Filters>

            <Content>
                {
                    data.map((item, index) => (
                        <HistoryFinancialCard
                            key={index}
                            title={item.description}
                            subTitle={item.dateFormatted}
                            tagColor={item.tagColor}
                            amount={item.amountFormatted}
                        />
                    ))
                }
            </Content>
        </Container>
    )
}

export default List;