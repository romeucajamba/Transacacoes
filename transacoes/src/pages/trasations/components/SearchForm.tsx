import { useContext } from 'react';
import {useForm} from 'react-hook-form';
import {SearchformContainer} from './styles';
import {MagnifyingGlass} from 'phosphor-react';
import * as z from 'zod';
import { TransationsContext } from '../../../context/TransationsContext';


const searchFormSchema = z.object({
    query: z.string(),
})

//tipando o meu  searchFormSchema , vai nos retornar a tipagem do nosso formulário
type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearcHForm(){
    const {register, handleSubmit} = useForm<SearchFormInputs>(
        {
            
        }
    )


    const {fetchTransations} = useContext(TransationsContext)

        async function hadleSearchTransations(data: SearchFormInputs){
            await fetchTransations(data.query)
        }
    return(
       <SearchformContainer onSubmit={handleSubmit(hadleSearchTransations)}>
            <input 
                type="text" 
                placeholder='pesquisar por transações' 
                    {...register('query')}
                />
            
            <button type='submit' >
                <MagnifyingGlass  size={20}/>
                Pesquisar
            </button>
       </SearchformContainer>
    )
}