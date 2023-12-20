import * as Dialog from '@radix-ui/react-dialog';
import {Overlay, Content, CloseButton, TransationType, TransationTypeButton} from './styles';
import { X, ArrowCircleUp, ArrowCircleDown } from 'phosphor-react';
import * as z from 'zod';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useContext } from 'react';
import {TransationsContext} from '../../context/TransationsContext';

const newTransationsFormSchema = z.object({
    description: z.string(),
    price: z.number(),
    category: z.string(),
    type: z.enum(['income', 'outcome'])
})

type NewTransationsFormInputs = z.infer<typeof newTransationsFormSchema>;

export function NewTransationsModal(){
    const {createTransation} = useContext(TransationsContext)
    const {register, reset, handleSubmit, control, formState: {isSubmitting}} = useForm<NewTransationsFormInputs>({
        resolver: zodResolver(newTransationsFormSchema),
        defaultValues: {
            type: 'income',
        }
    })

   async function handleCreateNewTransation(data: NewTransationsFormInputs){
    const { description,
            type,
            category,
            price
        } = data
     await createTransation({
            description,
            type,
            category,
            price,
     })
      
        reset()
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
                {/**Trabalhando com o conceito de controler do React-hook-form quando 
                 * se trata de componente não 
                 * nativo do html e faz parte do formulario para envio de informações */}
               <Controller
                control={control}
                name="type"
                render={({field}) => {
                    return (
                        <TransationType onValueChange={field.onChange} value={field.value}>
                            <TransationTypeButton variant='income' value='income'>
                                <ArrowCircleUp  size={25}/>
                                Entrada
                            </TransationTypeButton>
    
                            <TransationTypeButton variant='autcome' value='autcome'>
                                <ArrowCircleDown size={25}/>
                                Saída
                            </TransationTypeButton>
                       </TransationType>
                        
                    )
                }}
               />

                <button type="submit" disabled={isSubmitting}>Cadastrar</button>
            </form>
            
         </Content>
        </Dialog.Portal>
    )
}