import {
    OrderItemSection,
    OrderItemContainer,
    ItemImageSection,
    ItemImage,
    ItemContentSection,
    ItemName,
    ItemPrice,
    DeliveryDetailsContainer,
    DeliveryDetailsStatus,
    DeliveryDetailsText
} from './Order.Element';
export default function OrderedDish({ dish }) {
    const { name, price, imageURL } = dish;

    return (

        <OrderItemSection>
            <OrderItemContainer>
                <ItemImageSection>
                    <ItemImage src={imageURL} />
                </ItemImageSection>
                <ItemContentSection>
                    <ItemName>{name}</ItemName>
                    <ItemPrice>₹.{price}</ItemPrice>
                    <DeliveryDetailsContainer>
                    <DeliveryDetailsStatus></DeliveryDetailsStatus>
                    <DeliveryDetailsText>Delivered on Wed, May 05</DeliveryDetailsText>
                    </DeliveryDetailsContainer>
                </ItemContentSection>
            </OrderItemContainer>
        </OrderItemSection>

    )
}
