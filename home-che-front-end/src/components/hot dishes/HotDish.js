import { 
    Container, 
    Heading,
    HotDishContentArea,
    DishContainer
} from "./HotDish.Element";

export default function HotDish() {
    return (
        <Container>
            <Heading>
                Hot Dishes
            </Heading>
            <HotDishContentArea>
            <DishContainer></DishContainer>
            <DishContainer></DishContainer>
            <DishContainer></DishContainer>
            <DishContainer></DishContainer>
            <DishContainer></DishContainer>
            

            </HotDishContentArea>
        </Container>
    )
}
