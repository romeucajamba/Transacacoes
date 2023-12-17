import {SearchformContainer} from './styles';
import {MagnifyingGlass} from 'phosphor-react';

export function SearcHForm(){
    return(
       <SearchformContainer>
            <input type="text" placeholder='pesquisar por transações' />
            
            <button type='submit'>
                <MagnifyingGlass  size={20}/>
                Pesquisar
            </button>
       </SearchformContainer>
    )
}