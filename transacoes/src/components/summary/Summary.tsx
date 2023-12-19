import {SummaryContainer, SummaryCard} from './styles';
import {ArrowCircleUp, ArrowCircleDown, CurrencyCircleDollar} from 'phosphor-react';
import { useContext } from 'react';
import { TransationsContext } from '../../context/TransationsContext';
import { priceFormatter } from '../../utils/formatter';

export function Summary(){
    const {transations} = useContext(TransationsContext)

    //usando metodo de arrray reduce para somar todos os valores
    const summary = transations.reduce(
        (acc, transation) => {
            
            if(transation.type == 'income'){
                acc.income += transation.price;
                acc.total += transation.price;
            } else{
                acc.outcome += transation.price;
                acc.total -= transation.price;
            }
            return acc;
        }, 
        {
            income: 0, 
            outcome: 0, 
            total: 0
        })
    return(
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>Entrada</span>
                    <ArrowCircleUp size={32} color='#00b37e'/>
                </header>
                <strong>{priceFormatter.format(summary.income)}</strong>
            </SummaryCard>

            <SummaryCard>
                <header>
                    <span>Saídas</span>
                    <ArrowCircleDown size={32} color='#f75a68'/>
                </header>
                <strong>{priceFormatter.format(summary.outcome)}</strong>
            </SummaryCard>

            <SummaryCard variant='green'>
                <header>
                    <span>Total</span>
                    <CurrencyCircleDollar size={32} color='#d1d414'/>
                </header>
                <strong>{priceFormatter.format(summary.total)}</strong>
            </SummaryCard>
        </SummaryContainer>
    )
}