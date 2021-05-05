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
                    <RemoveItemBtn><RemoveIcon />  Remove</RemoveItemBtn>
                    <QuantityContainer>
                    <QuantityIncrement>+</QuantityIncrement>
                        <QuantityDisplay>
                          <Quantity>01</Quantity>
                        </QuantityDisplay>
                        <QuantityIncrement>-</QuantityIncrement>
                    </QuantityContainer>
                </ItemActionArea>
            </ItemContentSection>
        </CartItemContainer>
    )
}
