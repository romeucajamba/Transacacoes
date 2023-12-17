import {SummaryContainer} from './styles';
import {ArrowCircleUp, ArrowCircleDown, CurrencyCircleDollar} from 'phosphor-react';


export function Summary(){
    return(
        <SummaryContainer>
            <div>
                <header>
                    <span>Entrada</span>
                    <ArrowCircleUp size={32} color='#00b37e'/>
                </header>
                <strong>17.400.00 KZ</strong>
            </div>

            <div>
                <header>
                    <span>Saídas</span>
                    <ArrowCircleDown size={32} color='#f75a68'/>
                </header>
                <strong>17.400.00 KZ</strong>
            </div>

            <div>
                <header>
                    <span>Total</span>
                    <CurrencyCircleDollar size={32} color='#fff'/>
                </header>
                <strong>17.400.00 KZ</strong>
            </div>
        </SummaryContainer>
    )
}