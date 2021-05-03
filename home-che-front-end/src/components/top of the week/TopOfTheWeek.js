import {
    Container,
    Heading,
    TopOfContentArea,
} from "./TopOfTheWeek.Element";
import dishes from './dummyDishes'
import DishItem from './DisItem'

export default function TopOfTheWeek() {
    return (
        <Container>
            <Heading>
                Top Of The Week
            </Heading>
            <TopOfContentArea>
           {
               dishes.map((dish,key)=>{
                   return(
                       <DishItem dish={dish} key={key}/>
                   )
               })
           }
                   
            </TopOfContentArea>
        </Container>
    )
}
