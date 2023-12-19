import {Header} from '../../components/hedear/Header';
import {Summary} from '../../components/summary/Summary';
import {TransationsContainer, TransactionsTable, PrinceHighLigh } from './styles';
import {SearcHForm} from '../../pages/trasations/components/SearchForm';

export function Transations(){
    //Pegando a lista de transações atraveis da API

    return(
        <div>
            <Header/>
            <Summary/>

            <TransationsContainer>
                <SearcHForm/>

                <TransactionsTable>
                    
                    <tbody>
                        <tr>
                            <td width="50%">Desenvolvimento de site</td>
                            <td>
                                <PrinceHighLigh variant='income'>
                                    12.000.00 KZ 
                                </PrinceHighLigh>
                            </td>
                            <td>Venda</td>
                            <td>17/12/2023</td>
                        </tr>

                        <tr>
                            <td width="50%">Desenvolvimento de app mobile</td>
                            <td>
                                <PrinceHighLigh variant='outcome'>
                                    - 50.00 KZ
                                </PrinceHighLigh>
                            </td>
                            <td>Venda</td>
                            <td>17/12/2022</td>
                        </tr>
                    </tbody>
                </TransactionsTable>

            </TransationsContainer>
        </div>
    )
}