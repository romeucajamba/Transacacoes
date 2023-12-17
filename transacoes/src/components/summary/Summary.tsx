import {SummaryContainer, SummaryCard} from './styles';
import {ArrowCircleUp, ArrowCircleDown, CurrencyCircleDollar} from 'phosphor-react';


export function Summary(){
    return(
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>Entrada</span>
                    <ArrowCircleUp size={32} color='#00b37e'/>
                </header>
                <strong>17.400.00 KZ</strong>
            </SummaryCard>

            <SummaryCard>
                <header>
                    <span>Saídas</span>
                    <ArrowCircleDown size={32} color='#f75a68'/>
                </header>
                <strong>17.400.00 KZ</strong>
            </SummaryCard>

            <SummaryCard variant='green'>
                <header>
                    <span>Total</span>
                    <CurrencyCircleDollar size={32} color='#d1d414'/>
                </header>
                <strong>17.400.00 KZ</strong>
            </SummaryCard>
        </SummaryContainer>
    )
}