import { useState } from 'react';
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
                    <SearchInput placeholder='Search for food ,coffe ,etc...' />
                </SearchContainer>
            </HeaderContainer>
            <NavUl status={status}>
                <NavLi>
                    Home
                </NavLi>
                <NavLi>
                    Home
                </NavLi>
                <NavLi>
                    Home
                </NavLi>
                <NavLi>
                    Home
                </NavLi>
                </NavUl>
        </Container>
    )
}
