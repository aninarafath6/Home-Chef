import {
    CartItemContainer,
    ItemContentSection,
    ItemImageSection,
    ItemImage,
    ItemName,
    ItemPrice,
    ItemActionArea,
    RemoveItemBtn,
    RemoveIcon,
    QuantityContainer,
    QuantityDisplay,
    Quantity,
    QuantityIncrement,
    QuantityDecrement
} from './Cart.Element';
export default function CartItem() {
    return (
        <CartItemContainer>
            <ItemImageSection><ItemImage src='/images/ContentImage.png' /></ItemImageSection>
            <ItemContentSection>
                <ItemName>Spicy seasoned seafood noodles</ItemName>
                <ItemPrice>₹.50</ItemPrice>
                <ItemActionArea>
                    <RemoveItemBtn><RemoveIcon /> </RemoveItemBtn>
                    <QuantityContainer>
                    CustomizedSelects
                    </QuantityContainer>
                </ItemActionArea>
            </ItemContentSection>
        </CartItemContainer>
    )
}
