import {
    Container,
    MenuContentSection,
    MenuImage,
    MenuImageSection,
    MenuText
} from "./ShortMenu.Element";

export default function ShortMenu() {
    return (
        <Container>
            <MenuImageSection>
                <MenuImage src='/images/ContentImage.png' />
            </MenuImageSection>
            <MenuContentSection>
                <MenuText>Spicy Seasoned Seafood Noodles</MenuText>
            </MenuContentSection>
        </Container>
    )
}
