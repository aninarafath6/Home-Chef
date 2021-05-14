import { useState } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

// importing styled components
import {
  Container,
  HeaderContainer,
  LogoContainer,
  MenuIconButton,
  LogoText,
  SearchContainer,
  SearchInput,
  SearchIconContainer,
  SearchIcon,
  NavUl,
  NavLi,
  LiContainer,
  CartIconContainer,
  NavLink,
  NavCloseButton,
} from "./Header.Element";
import { Dialog } from "@material-ui/core";
import { useSelector ,useDispatch} from "react-redux";
import {logout} from "../../redux/actions/authAction";

export default function Header() {
  const dispatch = useDispatch()
  const { isLogged } = useSelector((state) => state.auth);
  // status state for open and close dialog box
  const [status, setStatus] = useState(false);
  // close dialog box function
  const closePannal = () => {
    setStatus((prev) => !prev);
  };

  const onLogout = () => {
    setStatus((prev) => !prev);
    localStorage.removeItem("home-token");
    dispatch(logout())
  };
  return (
    <Container>
      <HeaderContainer>
        <LogoContainer status={status}>
          <MenuIconButton
            onClick={() => setStatus(!status)}
            src="/icons/menuIcon.svg"
          />
          <LogoText to="/">Home Chef</LogoText>
        </LogoContainer>
        <SearchContainer>
          <SearchIconContainer>
            <SearchIcon src="/icons/searchIcon.svg" />
          </SearchIconContainer>
          <SearchInput placeholder="Search for food ,coffee ,etc..." />
        </SearchContainer>
        <Dialog open={status}>
          <NavUl>
            <NavCloseButton
              onClick={() => setStatus(!status)}
              src="/icons/menuIcon.svg"
            />
            <LiContainer>
              <NavLi>
                <NavLink onClick={closePannal} to="/cart">
                  <CartIconContainer>
                    <ShoppingCartIcon />
                  </CartIconContainer>
                </NavLink>
              </NavLi>
              <NavLi>
                <NavLink onClick={closePannal} to="/">
                  Home
                </NavLink>
              </NavLi>
              <NavLi>
                <NavLink onClick={closePannal} to="/orders">
                  Orders
                </NavLink>
              </NavLi>
              <NavLi>
                <NavLink onClick={closePannal} to="/offers">
                  Offers
                </NavLink>
              </NavLi>
              {isLogged ? (
                <NavLi>
                  <NavLink onClick={onLogout} to="/">
                    Logout
                  </NavLink>
                </NavLi>
              ) : (
                <>
                  <NavLi>
                    <NavLink onClick={closePannal} to="/signIn">
                      Sign in
                    </NavLink>
                  </NavLi>
                  <NavLi>
                    <NavLink onClick={closePannal} to="/signUp">
                      Sign Up
                    </NavLink>
                  </NavLi>{" "}
                </>
              )}
            </LiContainer>
          </NavUl>
        </Dialog>
      </HeaderContainer>
    </Container>
  );
}
