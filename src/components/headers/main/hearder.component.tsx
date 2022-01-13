import logo from '../../../assets/icons/logo.svg';
import menu from '../../../assets/icons/menu.svg';
import avatar from '../../../assets/icons/avatar.svg';
import { Logo, Menu, Profile } from './header.styled';
import { Container, Grid } from '@mui/material';


function Header() {
    return (
        <>
            <Container>
                <Grid container alignItems={'center'} justifyContent={'center'}>
                    <Grid item xs={10} alignItems={'center'} justifyContent={'center'} marginTop={'15px'} height={'70px'} display={'flex'}>
                        <a href='#'><Menu src={menu} alt={'Menu'}/></a>
                        <Logo src={logo} alt={'Netflix logo'} />
                        <a href='#'><Profile src={avatar} alt={'Perfil'} /></a>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Header;