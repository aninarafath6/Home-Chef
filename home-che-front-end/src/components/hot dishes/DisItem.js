import {
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
export default function DisItem({dish}) {
    const {name,price,availability,imageURL} =dish;
    return (
        <DishContainer>
                    <DishImageContainer>
                        <DisImage src={imageURL} alt={name} />
                    </DishImageContainer>
                    <DishContentContainer>
                    <DishContent>
                    <DishName>{name}</DishName>
                    <DishPrice>₹.{price}</DishPrice>
                    <DishAvailability>{availability} Bowls available</DishAvailability>
                    <AddToCartButton>Add To Cart</AddToCartButton>
                    </DishContent>
                    </DishContentContainer>
                </DishContainer>
    )
}
