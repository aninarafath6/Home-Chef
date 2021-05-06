import CartItem from './CartItem';
import {
    CartItemSection,
    CartPriceSection,
    Container,
    HeadingPrice,
    PriceDetailContainer,
    PriceDetail,
    CheckoutButton
} from './Cart.Element';

export default function Cart() {
    return (
        <Container>
            <CartItemSection>
                <CartItem />
                <CartItem />

            </CartItemSection>
            <CartPriceSection>
                <HeadingPrice>Total Amount.₹1618</HeadingPrice>
                <PriceDetailContainer>
                    <PriceDetail>Offer Price <span>₹.55</span></PriceDetail>
                    <PriceDetail>Delivery Charge <span>₹.55</span></PriceDetail>
                    <PriceDetail>Total <span>₹.55</span></PriceDetail>
                <CheckoutButton>Checkout</CheckoutButton>
                </PriceDetailContainer>
            </CartPriceSection>
        </Container>
    )
}
