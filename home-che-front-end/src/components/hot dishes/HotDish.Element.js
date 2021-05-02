import styled from 'styled-components';

export const Container = styled.div`
width:1304px;
min-height:500px
/* background:red */
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