import Orders from '../components/orders/Orders';
import Cart from '../components/cart/Cart';
import Home from '../components/home/Home';
import SignIn from '../components/login/Login';
import SignUp from '../components/signup/SignUp';

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
        pageLink: '/signIn',
        view: SignIn,
      },
      {
        pageLink: '/signUp',
        view: SignUp,
      },
]