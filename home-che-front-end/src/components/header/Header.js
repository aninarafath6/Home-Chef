import { useState } from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {
    Container,
    HeaderContainer,
    LogoContainer,
    MenuIconButton,
    LogoText,
    SearchContainer,
    SearchInput,
    SearchIconContainer,
    SearchIcon,
    NavUl,
    NavLi,
    LiContainer,
    CartIconContainer
    
} from './Header.Element';

export default function Header() {
    const [status,setStatus] =useState(false)
    return (
        <Container>
            <HeaderContainer>
                <LogoContainer status={status}>
                    <MenuIconButton onClick={()=>setStatus(!status)} src='/icons/menuIcon.svg' />
                    <LogoText to="/">Home Chef</LogoText>
                </LogoContainer>
                <SearchContainer>
                    <SearchIconContainer>
                        <SearchIcon src='/icons/searchIcon.svg' />
                    </SearchIconContainer>
                    <SearchInput placeholder='Search for food ,coffee ,etc...' />
                </SearchContainer>
                <NavUl status={status}>
                <LiContainer>
                <NavLi>
                <CartIconContainer>
                    <ShoppingCartIcon/>
                </CartIconContainer>
                </NavLi>
                <NavLi>
                    Home
                </NavLi>
                <NavLi>
                    Orders
                </NavLi>
                <NavLi>
                    Offers
                </NavLi>
                <NavLi>
                    Sign in / Sign Up
                </NavLi>
                </LiContainer>
                </NavUl>
            </HeaderContainer>
           
        </Container>
    )
}
