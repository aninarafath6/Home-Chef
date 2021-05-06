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
    Quantity,
    QuantityOption
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
                        <Quantity name='quantity'>
                        <QuantityOption value="1"> 1</QuantityOption>
                        <QuantityOption value="2"> 2</QuantityOption>
                        <QuantityOption value="3"> 3</QuantityOption>
                        <QuantityOption value="4"> 4</QuantityOption>

                        </Quantity>
                       
                    </QuantityContainer>
                </ItemActionArea>
            </ItemContentSection>
        </CartItemContainer>
    )
}
