import styled from 'styled-components';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';


export const Container = styled.div`
padding:25px;
/* background:red; */
margin:0 auto;
height:auto;
display:flex;
gap:25px;
width:1260px;   

    @media screen and (max-width:1300px){
        width:970px;
    }
    /* on tablet device */
    @media screen and (max-width:834px){
        width:90%;
        flex-direction:column;
    }
    /* on small device */
    @media screen and (max-width:425px){
        width:21rem;
        padding: 10px;
        flex-direction: column;

    }
`;

export const CartItemSection = styled.div`
    width:100%;
    min-height:200px;
    display:flex;
    flex-direction:column;
    gap:10px;

    /* on tablet device */
    @media screen and (max-width:834px){
        width:100%;
        min-height:200px;
    }
    /* on mobile large device */
    @media screen and (max-width:425px){
        width:100%;
        min-height:150px;
        /* background-color:green; */
    }
   
`;
export const CartPriceSection = styled.div`
    background:#1F1D2B;
    width:40%;
    height:265px;
    border-radius:10px;
    display:flex;
    flex-direction:column;
    align-items:center;

    /* on tablet device */
   @media screen and (max-width:834px){
        width:40%;
        height:250px;
   }
    /* on mobile large device */
    @media screen and (max-width:425px){
        width:100%;
        height:250px;
    }
`;
export const HeadingPrice = styled.h2`
/* Total Amount.₹1618 */
font-family: Barlow;
font-style: normal;
font-weight: 500;
font-size: 25px;
line-height: 140%;
/* identical to box height, or 35px */
text-align: center;
color: #F7FCFF;
margin-bottom: 2px;


`;
export const PriceDetailContainer = styled.div`
width:80%;
height:60%;
/* background:red; */
border-top: 4px solid #EA7C69;
padding-top:8px;

`;

export const PriceDetail = styled.h6 `
/* Offer Price */

display:flex;
justify-content:space-between;
font-family: Barlow;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 140%;
/* identical to box height, or 27px */
margin:15px;
color: #ABBBC2;


`;

export const CheckoutButton = styled(Button)`
    width: 100%;
    &&&{
    background: #2D303E;
    color:#ABBBC2;
    }
    `;



// cart item

export const CartItemContainer = styled.div`
        background:#1F1D2B;
        width:100%;
        height:150px;
        border-radius:10px;
        display:flex;
            height:180px;
        /* @media screen and (max-width:768px){
            height:180px;
    
        } */
        @media screen and (max-width:425px){
            height:145px;
    
        }
`;
export const ItemImageSection = styled.div`
    /* background-color:cyan; */
    width:45%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
`;
export const ItemContentSection = styled.div`
    /* background-color:blanchedalmond; */
    width:55%;
    height:100%;
    justify-content: center;
    display: flex;
    flex-direction: column;
    gap:14px;
`;
export const ItemImage = styled.img`
    width:150px;
    transition:all ease 1s;
        :hover{
          transform: rotate(45deg);
        }
    /* @media screen and (max-width:768px){
        width:150px;
    
        } */
        @media screen and (max-width:425px){
        width:111px;
    
        }
        /* @media screen and (max-width:360px){
        width:111px;
    
        } */
`;
export const ItemName = styled.p`
        color:#ABBBC2;
        font-size:18px;
        margin:0;

        /* @media screen and (max-width:768px){
        font-size:18px;
    } */
    @media screen and (max-width:425px){
        font-size:14px;
    }
`;
export const ItemPrice = styled.p`
        color:#ABBBC2;
        font-size:16px;
        margin:0;

        @media screen and (max-width:834px){
        font-size:12px;
    }
    @media screen and (max-width:425px){
        font-size:14px;
    }
`;

export const ItemActionArea = styled.div`
/* background:red;  */
width:100%;
height:25px;
display:flex;
justify-content:space-around;
    @media screen and (max-width:1080px){
    justify-content:space-around;
        

    }
    @media screen and (max-width:360px){
    justify-content:space-around;
    }
`;

export const RemoveItemBtn = styled(Button)`
&&&{
    background-color:#2D303E;
    color:#ABBBC2;
    font-size:15px;
    padding:10px ;
    @media screen and (max-width:1080px){
    justify-content:space-around;
    font-size:12px;
    }
}
@media screen and (max-width:834px){
        &&&{
    font-size:15px;
    padding:10px ;

        }
    
}
`;
export const RemoveIcon = styled(DeleteIcon)`
width:15px;
`;

export const QuantityContainer = styled.div`
display:flex;
`;

export const Quantity = styled.select `
background-color: #2D303E;
    color: #abbbc2;
    cursor: pointer;
    border-radius: 5px;
    padding: 0px 8px;
    border: none;
    width: 49px;
    height: 28px;
    outline:none;
`;
export const QuantityOption = styled.option`
color:#EA7C69;
outline:none;
border:none;
    :hover{
        background-color:#EA7C69;
    }
`;
