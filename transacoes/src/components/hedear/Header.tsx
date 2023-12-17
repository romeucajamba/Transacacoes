import {HeaderContainer, HeaderContent, ImageLogo, NewTransationsButton} from './styles';
import logo from '../../assets/img-150.png';
import * as Dialog from '@radix-ui/react-dialog';


export function Header(){
    return(
        <HeaderContainer>
            <HeaderContent>
                <ImageLogo  src={logo} alt="logoMoney" />

                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <NewTransationsButton>
                            Nova transação
                       </NewTransationsButton>
                    </Dialog.Trigger>

                    <Dialog.Portal>
                            <Dialog.Overlay />

                            <Dialog.Content>
                                <Dialog.Title>Nova transação</Dialog.Title>
                                <Dialog.Close />
                            </Dialog.Content>
                    </Dialog.Portal>
                </Dialog.Root>
                
            </HeaderContent>
        </HeaderContainer>
    )
}