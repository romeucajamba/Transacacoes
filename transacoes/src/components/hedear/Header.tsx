import {HeaderContainer, HeaderContent, ImageLogo, NewTransationsButton} from './styles';
import { NewTransationsModal } from '../Modal';
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

                   <NewTransationsModal/>
                </Dialog.Root>
                
            </HeaderContent>
        </HeaderContainer>
    )
}