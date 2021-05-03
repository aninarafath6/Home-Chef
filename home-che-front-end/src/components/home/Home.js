
import Hero from '../hero/Hero';
import HotDish from '../hot dishes/HotDish';
import { Container } from './Home.Element';
import TopOfTheWeek from '../top of the week/TopOfTheWeek';
import Footer from '../footer/Footer';

export default function Home() {
    return (
        <Container>
            <Hero/>
            <HotDish/>
            <TopOfTheWeek/>
            <Footer/>
        </Container>
    )
}
