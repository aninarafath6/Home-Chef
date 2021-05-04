  import styled from 'styled-components';
  import { Button } from '@material-ui/core';

  export const Container = styled.div`
  width:1304px;
  min-height:500px;
  margin:0 auto;
  padding: 5px 28px 0px;
  @media(max-width:1304px){
      width:100%;
  }
  `;
  export const Heading = styled.h1`
  /* Hot Dishes */
  margin: 60px 15px;
      font-family: Barlow;
      font-style: normal;
      font-weight: 600;
      font-size: 28px;
      line-height: 130%;
      color: #FFFFFF;
      position: relative;
      ::before{
        content: '';
      position: absolute;
      height: 1px;
      background-color: #2D303E;
      bottom: 0;
      width: 132px;
      /* margin-top: -17px; */
      transform: translateY(5px);
      }
      ::after{
        content: '';
      position: absolute;
      height: 5px;
      background-color: #EA7C69;
      bottom: 0;
      width: 92px;
      /* margin-top: -17px; */
      transform: translateY(5px);
      left:0;
      border-radius:15px
      }

  `;
  export const HotDishContentArea = styled.div`
        /* width: 100%; */
        height: fit-content;
        padding: 10px;
        margin-top: 125px;
      display:grid;
      grid-template-columns:repeat(5,1fr);
      grid-column-gap: 17px;
      grid-row-gap: 85px;
        @media screen and (max-width:1024px){
        grid-template-columns:repeat(4,1fr);
        }     
        @media screen and (max-width:768px){
        grid-template-columns:repeat(3,1fr);
        } 
  `;
  export const DishContainer = styled.div`
    width:192px;
    height:260px;
    border-radius:16px;
    background-color:#1F1D2B;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction: column;
  @media(max-width:480px){

      width:15rem;
  }
  `;
  export const DishImageContainer = styled.div`
      width:132px;
      height:132px;
      /* background-color:red; */
      transform: translateY(-111px);
  position: absolute;
  `;
  export const DisImage = styled.img`
        width:132px;
      height:132px;
  `;
  export const DishContentContainer = styled.div``;
    export const DishContent = styled.div`
  width: 140px;
  height: 130px;
  margin-top: 79px;
  display:flex;
  justify-content:center;
  text-align:center;
  flex-direction:column
  `;
  export const DishName = styled.p`
      /* Spicy seasoned seafood noodles */
      font-family: Barlow;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 130%;
      /* or 18px */
      text-align: center;
      color: #FFFFFF;
    `;

export const DishPrice = styled.p`
/* $ 2.29 */

font-family: Barlow;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 140%;
/* identical to box height, or 20px */
text-align: center;
margin-top: 0;
color: #FFFFFF;

`;
export const DishAvailability =styled.p`
/* 20 Bowls available */
font-family: Barlow;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 140%;
/* identical to box height, or 20px */
text-align: center;
margin-top: 0;
color: #ABBBC2;`;
export const AddToCartButton = styled(Button)`
&&&{
  background: #2D303E;
border-radius: 4px;
outline:none;
border:none;
padding:1px;
color:#fff;
}
`;