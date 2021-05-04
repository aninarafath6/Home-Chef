import { useState } from 'react';
import ShortMenu from '../short menu/ShortMenu';
import {
    HeroContainer,
    MainText,
    Container,
    MenuContainer
} from "./Hero.Element";

import dummyMenu from './dummyMenu'
export default function Hero() {
    return (
        <HeroContainer>
            <Container>
                <MainText>What would you <br/> like to eat?</MainText>
                <MenuContainer>
                    {/* //we need menu item display */}

                        {
                            dummyMenu.map((menu,i)=>{

                               return(
                                <ShortMenu menu={menu} key={i}/>
                               )
                            })
                        }
                </MenuContainer>
            </Container>
        </HeroContainer>
    )
}
