import CartItem from './CartItem';
import { 
    CartItemSection,
    CartPriceSection,
    Container 
    } from './Cart.Element';

export default function Cart() {
    return (
        <Container>
        <CartItemSection>
            <CartItem />
            <CartItem />

        </CartItemSection>
        <CartPriceSection>

        </CartPriceSection>
        </Container>
    )
}
