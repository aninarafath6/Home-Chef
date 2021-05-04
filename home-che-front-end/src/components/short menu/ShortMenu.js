import {
    Container,
    MenuContentSection,
    MenuImage,
    MenuImageSection,
    MenuText
} from "./ShortMenu.Element";

export default function ShortMenu({menu}) {
    let {name,imageURL}=menu;
    return (
        <Container>
            <MenuImageSection>
                <MenuImage src={imageURL} />
            </MenuImageSection>
            <MenuContentSection>
                <MenuText>{name}</MenuText>
            </MenuContentSection>
        </Container>
    )
}
