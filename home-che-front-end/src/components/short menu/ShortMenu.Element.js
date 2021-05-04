import styled from 'styled-components';

export const Container = styled.div`
width:100%;
height:118px;
background-color:#1F1D2B;
border-radius:16px;
display:flex;
margin-left: 16px;
margin-top: 16px;
    
    @media screen and (max-width:425px){
        height:170px;
        } 
`;

export const MenuImageSection = styled.div`
width:45%;
height:100%;
/* background-color:red; */
display:flex;
align-items:center;
justify-content:center
`;
export const MenuContentSection = styled.div`
width:65%;
height:100%;
/* background-color:purple; */
padding: 0 10px;
display:flex;
align-items:center;
justify-content:center;
`;
export const MenuImage = styled.img`
width:101px;
@media screen and (max-width:425px){
    width:125px;

        } 
`;
export const MenuText = styled.p`
/* Spicy Seasoned Seafood Noodles */

font-family: Barlow;
font-style: normal;
font-weight: 500;
font-size: 17px;
line-height: 130%;
/* or 22px */

color: #FFFFFF;
@media screen and (max-width:425px){
    font-size: 19px;


        } 
`;