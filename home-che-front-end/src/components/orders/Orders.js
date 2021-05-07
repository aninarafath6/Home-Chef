import dummyDishes from './dummyDishes';
import {Container} from './Order.Element';
import OrderedDish from './OrderedDish';

export default function Orders() {
    return (
        <Container>
            {
                dummyDishes.map((dish,key)=>{
                    return(

                        <OrderedDish dish={dish} key={key}/>
                    )
                })
            }
        </Container>
    )
}
