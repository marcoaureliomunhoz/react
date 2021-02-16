import React from 'react';
import {
    Container,
    Header,
    Logo,
    Title,
    MenuContainer,
    MenuItemLink,
    MenuItemButton
} from './styles';
import {
    MdDashboard,
    MdArrowDownward,
    MdArrowUpward,
    MdClose
} from 'react-icons/md';
import logo from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';

const Aside: React.FC = () => {
    const { signOut } = useAuth();

    return (
        <Container>
            <Header>
                <Logo src={logo} alt='Logo Minha Carteira'></Logo>
                <Title>Minha Carteira</Title>
            </Header>
            <MenuContainer>
                <MenuItemLink href='/dashboard'>
                    <MdDashboard />
                    Dashboard
                </MenuItemLink>
                <MenuItemLink href='/list/entry-balance'>
                    <MdArrowUpward />
                    Entradas
                </MenuItemLink>
                <MenuItemLink href='/list/exit-balance'>
                    <MdArrowDownward />
                    Saídas
                </MenuItemLink>
                <MenuItemButton onClick={() => signOut()}>
                    <MdClose />
                    Sair
                </MenuItemButton>
            </MenuContainer>
        </Container>
    )
}

export default Aside;