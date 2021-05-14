import Orders from "../components/orders/Orders";
import Cart from "../components/cart/Cart";
import Home from "../components/home/Home";
import SignIn from "../components/login/Login";
import SignUp from "../components/signup/SignUp";

export const Pages = [
  {
    pageLink: "/",
    view: Home,
    privetRoute: false,
  },
  {
    pageLink: "/cart",
    view: Cart,
    privetRoute: true,
  },
  {
    pageLink: "/orders",
    view: Orders,
    privetRoute: false,
  },
  {
    pageLink: "/signIn",
    view: SignIn,
    privetRoute: false,
  },
  {
    pageLink: "/signUp",
    view: SignUp,
    privetRoute: false,
  },
];
