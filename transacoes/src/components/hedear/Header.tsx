import {HeaderContainer, HeaderContent, ImageLogo, NewTransationsButton} from './styles';
import logo from '../../assets/img-150.png';

export function Header(){
    return(
        <HeaderContainer>
            <HeaderContent>
                <ImageLogo  src={logo} alt="logoMoney" />
                <NewTransationsButton>Nova transação</NewTransationsButton>
            </HeaderContent>
        </HeaderContainer>
    )
}