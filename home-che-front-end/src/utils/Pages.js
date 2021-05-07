import Orders from '../components/orders/Orders';
import Cart from '../components/cart/Cart';
import Home from '../components/home/Home';
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
]