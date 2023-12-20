import * as Dialog from '@radix-ui/react-dialog';
import {Overlay, Content, CloseButton, TransationType, TransationTypeButton} from './styles';
import { X, ArrowCircleUp, ArrowCircleDown } from 'phosphor-react';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const newTransationsFormSchema = z.object({
    description: z.string(),
    price: z.number(),
    category: z.string(),
    type: z.enum(['income', 'outcome'])
})

type NewTransationsFormInputs = z.infer<typeof newTransationsFormSchema>;

export function NewTransationsModal(){
    const {register, handleSubmit, formState: {isSubmitting}} = useForm<NewTransationsFormInputs>({
        resolver: zodResolver(newTransationsFormSchema)
    })

   async function handleCreateNewTransation(data: NewTransationsFormInputs){
        console.log(data)
        await new Promise(resolve => setTimeout(resolve , 2000))
    }
    return(
        <Dialog.Portal>
         <Overlay />

         <Content>
            <Dialog.Title>Nova transação</Dialog.Title>
            <CloseButton>
                <X size={25}/>
            </CloseButton>

            <form onSubmit={handleSubmit(handleCreateNewTransation)}>
                <input 
                    type="text" 
                    placeholder='Descrição'  
                    required
                    {...register('description')}
                    />
                <input 
                    type="text" 
                    placeholder='Preço'  
                    required
                    {...register('price', {valueAsNumber: true})}
                    />
                <input 
                    type="text" 
                    placeholder='Categoria' 
                    required
                    {...register('category')}
                    />

                <TransationType>
                    <TransationTypeButton variant='income' value='income'>
                        <ArrowCircleUp  size={25}/>
                        Entrada
                    </TransationTypeButton>

                    <TransationTypeButton variant='autcome' value='autcome'>
                        <ArrowCircleDown size={25}/>
                        Saída
                    </TransationTypeButton>
                </TransationType>

                <button type="submit" disabled={isSubmitting}>Cadastrar</button>
            </form>
            
         </Content>
        </Dialog.Portal>
    )
}