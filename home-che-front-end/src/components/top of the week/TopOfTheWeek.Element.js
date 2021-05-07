  import styled from 'styled-components';
  import { Button } from '@material-ui/core';

  export const Container = styled.div`
  width:1304px;
  min-height:500px;
  margin:0 auto;
  padding: 5px 28px 0px;
  padding:0;

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
  export const TopOfContentArea = styled.div`
        /* width: 100%; */
        height: fit-content;
        padding: 10px;
        margin-top: 125px;
      display:grid;
      grid-template-columns:repeat(5,1fr);
      grid-column-gap: 17px;
      grid-row-gap: 85px;

        @media screen and (max-width:1024px){
        grid-template-columns:repeat(3,1fr);
        }     
        @media screen and (max-width:834px){
        grid-template-columns:repeat(2,1fr);
        } 
        @media screen and (max-width:425px){
        grid-template-columns:repeat(1,1fr);
        grid-row-gap: 121px;
        } 

  `;
  export const DishContainer = styled.div`
     width:100%;
    height:310px;
    border-radius:16px;
    background-color:#1F1D2B;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:0 auto;
    flex-direction: column;
    @media screen and (max-width:1024px){
      height:485px;
        }  
        @media screen and (max-width:1024px){
      width: 88%;
        } 
  `;
  export const DishImageContainer = styled.div`
      width:155px;
      height:155px;
      transform: translateY(-121px);
      position: absolute;
      @media screen and (max-width:1024px){
      width:220px;
      height:220px;
      transform: translateY(-211px);
        }  
  `;
  export const DisImage = styled.img`
        width:100%;
        height:100%;
        transition:all ease 1s;
        :hover{
          transform: rotate(45deg);
        }
  `;
  export const DishContentContainer = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
`;
export const DishContent = styled.div`
width:80%;
height: 130px;
margin-top: 79px;
display:flex;
justify-content:center;
text-align:center;
flex-direction:column;
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
  @media screen and (max-width:1024px){
    font-size: 25px;
    }   
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
@media screen and (max-width:1024px){
    font-size: 28px;
    }  
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
color: #ABBBC2;
@media screen and (max-width:1024px){
    font-size: 20px;
    }  `;
export const AddToCartButton = styled(Button)`
&&&{
background: #2D303E;
border-radius: 4px;
outline:none;
border:none;
padding:1px;
color:#fff;
@media screen and (max-width:1024px){
    padding:9px
    }  
}
`;