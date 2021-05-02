import { useState } from 'react';
import ShortMenu from '../short menu/ShortMenu';
import {
    HeroContainer,
    MainText,
    Container,
    MenuContainer
} from "./Hero.Element";


export default function Hero() {
    let [arr,setArr] =useState([{},{},{},{}])
    
    return (
        <HeroContainer>
            <Container>
                <MainText>What would you <br/> like to eat?</MainText>
                <MenuContainer>
                    {/* //we need menu item display */}

                        {
                            arr.map((key,i)=>{

                               return(
                                <ShortMenu key={i}/>
                               )
                            })
                        }
                </MenuContainer>
            </Container>
        </HeroContainer>
    )
}
