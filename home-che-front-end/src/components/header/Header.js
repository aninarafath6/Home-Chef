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
} from './Header.Element';

export default function Header() {
 
    return (
        <Container>
            <HeaderContainer>
                <LogoContainer>
                    <MenuIconButton src='/icons/menuIcon.svg' />
                    <LogoText to="/">Home Chef</LogoText>
                </LogoContainer>
                <SearchContainer>
                    <SearchIconContainer>
                        <SearchIcon src='/icons/searchIcon.svg' />
                    </SearchIconContainer>
                    <SearchInput placeholder='Search for food ,coffe ,etc...' />
                </SearchContainer>
            </HeaderContainer>
        </Container>
    )
}
