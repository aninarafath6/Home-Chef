import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
height:100px;
background-color:#252836;
display:flex;
align-items:center;
justify-content:center;

@media (max-width: 768px) {
    min-height: 180px;
  }
`;
export const HeaderContainer = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
width:100%;
padding: 17px 110px;
@media (max-width: 768px) {
   flex-direction:column;
   padding: 17px 26px;
  }
`;
export const LogoContainer = styled.div`
display:flex;
@media (max-width: 768px) {
    margin-bottom: 30px;
    width: 100%;
  }
`;
export const MenuIconButton = styled.img`
width:30px;
/* height:30px; */
cursor: pointer;
`;
export const LogoText = styled(Link)`
/* Home Chef */
font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 25px;
line-height: 36px;
color: #FFFFFF;
margin-left:25px;
text-decoration:none;

`;
export const SearchContainer = styled.div`
display:flex;
align-items:center;
@media (max-width: 768px) {
    width:100%;
  }

`;
export const SearchInput = styled.input`
background:#2D303E;
width:391px;
height:47px;
outline:none;
border:1px solid #393C49;
border-radius: 0px 8px 8px 0px;
color:#ABBBC2;
padding: 3px 21px;
border-left: none;
@media (max-width: 1024px) {
    width:200px;
  }
  @media (max-width: 768px) {
    width:100%;
  }
`;
export const SearchIconContainer = styled.div`
background:#2D303E;
height:47px;
padding: 3px 21px;
display:flex;
align-items:center;
justify-content:center;
border:1px solid #393C49;
border-right:none;
border-radius: 8px 0 0px 8px;
`;
export const SearchIcon = styled.img``;