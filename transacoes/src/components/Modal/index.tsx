import * as Dialog from '@radix-ui/react-dialog';
import {Overlay, Content, CloseButton, TransationType, TransationTypeButton} from './styles';
import { X, ArrowCircleUp, ArrowCircleDown } from 'phosphor-react';

export function NewTransationsModal(){
    return(
        <Dialog.Portal>
         <Overlay />

         <Content>
            <Dialog.Title>Nova transação</Dialog.Title>
            <CloseButton>
                <X size={25}/>
            </CloseButton>

            <form action="">
                <input type="text" placeholder='Descrição'  required/>
                <input type="text" placeholder='Preço'  required/>
                <input type="text" placeholder='Categoria' required/>

                <TransationType>
                    <TransationTypeButton variant='income'>
                        <ArrowCircleUp  size={25}/>
                        Entrada
                    </TransationTypeButton>

                    <TransationTypeButton variant='autcome'>
                        <ArrowCircleDown size={25}/>
                        Saída
                    </TransationTypeButton>
                </TransationType>

                <button type="submit">Cadastrar</button>
            </form>
            
         </Content>
        </Dialog.Portal>
    )
}