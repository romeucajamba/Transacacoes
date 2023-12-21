import { TransationsContext } from '../context/TransationsContext';
import { useContextSelector } from 'use-context-selector';

//Meu hook ussummary criado para ter os calculos dos preços das trasanções

export function useSummary(){
    const transations = useContextSelector(TransationsContext, (context) => {
        return context.transations;
    })

    //usando metodo de arrray reduce para somar todos os valores
    const summary =  transations.reduce(
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

        return summary;
}