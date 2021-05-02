import styled from 'styled-components';

export const Container = styled.div`
width:1304px;
min-height:500px;
/* background:red */

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
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 77px;
    @media(max-width:480px){
    justify-content:center;
}
`;
export const DishContainer = styled.div`
width:192px;
height:260px;
border-radius:16px;
background-color:#1F1D2B;
@media(max-width:480px){

    width:15rem;
}
`;