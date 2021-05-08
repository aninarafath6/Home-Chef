import Orders from '../components/orders/Orders';
import Cart from '../components/cart/Cart';
import Home from '../components/home/Home';
import LoginOrSignUp from '../components/login/Login';
export const Pages = [
    {
        pageLink: '/',
        view: Home,
      },
      {
        pageLink: '/cart',
        view: Cart,
      },
      {
        pageLink: '/orders',
        view: Orders,
      },
      {
        pageLink: '/loginOrSignUp',
        view: LoginOrSignUp,
      },
]