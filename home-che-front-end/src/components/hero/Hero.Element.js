import styled from 'styled-components';

export const Container = styled.div`
width:1304px;
`;
export const HeroContainer = styled.div`
width:100%;
min-height:500px;
background-color:#252836;
display:flex;
justify-content:center;

`;
export const MainText = styled.h3`
margin-top:15px;
width: 367px;
height: 131px;
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 50px;
line-height: 124.8%;
/* or 62px */
margin-left: 39px;
color: #ABBBC2;
width:auto;
@media (max-width: 1440px) {
    font-size: 40px;
  }
  @media (max-width: 425px) {
    font-size: 25px;
  }
`;
export  const MenuContainer = styled.div`
width:100%;
height:auto;
display:flex;
flex-wrap:wrap;
gap: 30px;
@media (max-width: 665px) {
        justify-content:center;
        }
    

`;