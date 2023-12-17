import {Header} from '../../components/hedear/Header';
import {Summary} from '../../components/summary/Summary';
import {TransationsContainer, TransactionsTable, PrinceHighLigh } from './styles';

export function Transations(){
    return(
        <div>
            <Header/>
            <Summary/>

            <TransationsContainer>
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