import {Header} from '../../components/hedear/Header';
import {Summary} from '../../components/summary/Summary';
import {TransationsContainer, TransactionsTable, PrinceHighLigh } from './styles';
import {SearcHForm} from '../../pages/trasations/components/SearchForm';


export function Transations(){
   
    return(
        <div>
            <Header/>
            <Summary/>

            <TransationsContainer>
                <SearcHForm/>

                <TransactionsTable>
                    
                    <tbody>
                        { /// transations variavel  do useState que está armazenando as informa da api
                            transations.map(transations => {
                                return (
                                    //primeiro elemento dentro do map tem que ter uma key, identificador único
                                        <tr key={transations.id}>
                                             <td width="50%">{transations.description}</td>
                                             <td>
                                                <PrinceHighLigh variant={transations.type}>
                                                   {transations.price}
                                                 </PrinceHighLigh>
                                             </td>
                                             <td>{transations.category}</td>
                                             <td>{transations.createAt}</td>
                                        </tr>
                                        )
                            })
                        }
                    </tbody>
                </TransactionsTable>

            </TransationsContainer>
        </div>
    )
}