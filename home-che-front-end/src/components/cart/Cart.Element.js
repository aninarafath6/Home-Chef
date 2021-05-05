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
width:90%;   
@media screen and (min-width:768px){
        width:65%;
    }
    
    /* on tablet device */
    @media screen and (max-width:768px){
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
    @media screen and (max-width:768px){
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
    height:250px;
    border-radius:10px;


    /* on tablet device */
   @media screen and (max-width:768px){
        width:40%;
        height:250px;
        flex-direction:row;
   }
    /* on mobile large device */
    @media screen and (max-width:425px){
        width:100%;
        height:250px;
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
    padding:5px;
`;
export const ItemImage = styled.img`
    width:150px;
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

        /* @media screen and (max-width:768px){
        font-size:18px;
    } */
    @media screen and (max-width:425px){
        font-size:12px;
    }
`;
export const ItemPrice = styled.p`
        color:#ABBBC2;
        font-size:16px;

        @media screen and (max-width:768px){
        font-size:12px;
    }
    @media screen and (max-width:425px){
        font-size:12px;
    }
`;

export const ItemActionArea = styled.div`
/* background:red;  */
width:100%;
height:25px;
display:flex;
justify-content:space-around;
margin-top:15px;
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
@media screen and (max-width:768px){
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
export const QuantityDisplay = styled.div`
    width:35px;
    height:25px;
    background-color:#2D303E;
    padding:1px 3;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:5px;
    margin-right:5px;
    @media screen and (max-width:768px){
        margin-right:15px;

    }
    
`;
export const Quantity = styled.span `
color:#EA7C69;`;
export const QuantityIncrement =styled.span`
margin-right:5px;
cursor:pointer;
color:#ABBBC2;

`;
export const QuantityDecrement =styled.span`
cursor:pointer;
color:#ABBBC2;

`;
