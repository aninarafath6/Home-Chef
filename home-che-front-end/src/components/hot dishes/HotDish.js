import {
    Container,
    Heading,
    HotDishContentArea,
} from "./HotDish.Element";
import dishes from './dummyDishes'
import DishItem from './DisItem'

export default function HotDish() {
    return (
        <Container>
            <Heading>
                Hot Dishes
            </Heading>
            <HotDishContentArea>
           {
               dishes.map((dish,key)=>{
                   return(
                       <DishItem dish={dish} key={key}/>
                   )
               })
           }
                   
            </HotDishContentArea>
        </Container>
    )
}
