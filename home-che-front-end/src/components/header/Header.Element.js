import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  height:100px;
  background-color:#252836;
  display:flex;
  align-items:center;
  justify-content:center;
  position: fixed;
  width:100%;
  z-index:10;


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
  position:${props => props.status ? 'absolute' : 'relative'};
  z-index:0;
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
  cursor: pointer;
  z-index:10;
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
  z-index: 10;
`;
export const SearchContainer = styled.div`
  display:flex;
  align-items:center;
  margin-left: auto;
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
export const OpenedHeaderPannal = styled.div`
  position:absolute;
  top:0;
  left:0;
  bottom:0;
`;
export const NavUl = styled.ul`
  visibility:${props => props.status ? 'visible' : 'hidden'};
  position:fixed;
  height:100vh;
  width:100%;
  bottom: 0;
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;
        list-style: none;
        background: rgba( 37, 40, 54, 0.25 );
        background: rgba( 37, 40, 54, 0.75 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 8.5px );
  -webkit-backdrop-filter: blur( 8.5px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  transition:.3s ease;
  left:0;
  `;
export const NavLi = styled.li`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: normal;
  line-height: 25px;
  color: #ABBBC2;`;
export const LiContainer = styled.div`
  width:100%;
  height:80%;
  display: flex;
      align-items: center;
      justify-content: space-around;
      flex-direction: column;
`;
export const CartIconContainer = styled.div`
    width: 45px;
    height: 44px;
    background-color: #393C49;
    border-radius: 8px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    ::after{
      content: '1';
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: #EA7C69;
    position: absolute;
    right: 0;
    top: 0;
    transform: translate(7px, -5px);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 15px;
line-height: 29px;
text-align: center;

color: #FFFFFF;
    }
`;