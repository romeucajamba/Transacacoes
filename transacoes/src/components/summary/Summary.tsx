import {SummaryContainer, SummaryCard} from './styles';
import {ArrowCircleUp, ArrowCircleDown, CurrencyCircleDollar} from 'phosphor-react';
import { priceFormatter } from '../../utils/formatter';
import { useSummary } from '../../hooks/useSummary';

export function Summary(){
    const summary = useSummary();
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