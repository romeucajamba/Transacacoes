import {useForm} from 'react-hook-form';
import {SearchformContainer} from './styles';
import {MagnifyingGlass} from 'phosphor-react';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { TransationsContext } from '../../../context/TransationsContext';
import { useContextSelector } from 'use-context-selector';


const searchFormSchema = z.object({
    query: z.string(),
})

//tipando o meu  searchFormSchema , vai nos retornar a tipagem do nosso formulário
type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearcHForm(){
    const {register, handleSubmit, formState: {isSubmitting}} = useForm<SearchFormInputs>(
        {
            resolver: zodResolver(searchFormSchema),
        }
    )


    const fetchTransations = useContextSelector(TransationsContext, (context) => {
        return context.fetchTransations
    })

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
            
            <button type='submit' disabled={isSubmitting}>
                <MagnifyingGlass  size={20}/>
                Pesquisar
            </button>
       </SearchformContainer>
    )
}