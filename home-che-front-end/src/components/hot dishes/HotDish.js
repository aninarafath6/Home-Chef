import {
    Container,
    Heading,
    HotDishContentArea,
    DishContainer,
    DishImageContainer,
    DishContentContainer,
    DisImage,
    DishContent,
    DishName,
    DishPrice,
    DishAvailability,
    AddToCartButton
} from "./HotDish.Element";

export default function HotDish() {
    return (
        <Container>
            <Heading>
                Hot Dishes
            </Heading>
            <HotDishContentArea>
                <DishContainer>
                    <DishImageContainer>
                        <DisImage src='/images/Content-Image 5.png' />
                    </DishImageContainer>
                    <DishContentContainer>
                    <DishContent>
                    <DishName>Spicy seasoned seafood noodles</DishName>
                    <DishPrice>$.2.29</DishPrice>
                    <DishAvailability>20 Bowls available</DishAvailability>
                    <AddToCartButton>Add To Cart</AddToCartButton>
                    </DishContent>
                    </DishContentContainer>
                </DishContainer>



            </HotDishContentArea>
        </Container>
    )
}
