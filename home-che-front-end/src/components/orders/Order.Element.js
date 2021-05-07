import styled from 'styled-components';


export const Container = styled.div`
padding:25px;
/* background:red; */
margin:0 auto;
height:auto;
display:flex;
gap:25px;
width:1260px;   
flex-direction: column;
align-items: center;
@media screen and (max-width:1300px){
        width:970px;
    }
    /* on tablet device */
    @media screen and (max-width:834px){
        width:90%;
    }
    /* on small device */
    @media screen and (max-width:425px){
        width:21rem;
        padding: 10px;

    }
/* background:red; */

`;

export const OrderItemSection = styled.div`
 width:60%;
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
export const OrderItemContainer = styled.div`
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
    width:30%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    @media screen and (max-width:600px){
        width: 42%;
    }
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
export const ItemContentSection = styled.div`
    /* background-color:blanchedalmond; */
    width:55%;
    height:100%;
    justify-content: center;
    display: flex;
    flex-direction: column;
    gap:14px;
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
        font-size:20px;
    }
        @media screen and (max-width:425px){
            font-size:14px;
        }
`;

export const DeliveryDetailsContainer = styled.div`
    display:flex;
    align-items:center;
`;
export const DeliveryDetailsStatus = styled.div`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: #EA7C69;
    border: 3px solid #fff;
    margin-right:3px;
@media screen and (max-width:500px){
    width: 10px;
    height: 10px;
}
`;
export const DeliveryDetailsText= styled.h5`
    color:#ABBBC2;
    margin: 0 5px;
    @media screen and (max-width:500px){
        font-size:10px;
    }
`;
