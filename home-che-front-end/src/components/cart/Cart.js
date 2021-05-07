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

import dummyDishes from './dummyDishes'

export default function Cart() {
    return (
        <Container>
            <CartItemSection>
               {
                dummyDishes.map((dish,key)=>{
                    return(

                        <CartItem dish={dish} key={key}/>
                    )
                })
               }
                
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
