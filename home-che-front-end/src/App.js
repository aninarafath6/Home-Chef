import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/header/Header';
import Home from './components/home/Home';
import Cart from './components/cart/Cart';
export default function App() {
  return (
    <div>
      <Router>
        <Header />
        <Route   exact path='/' component={Home}/>
        <Route   path='/home' component={Home}/>
        <Route   path='/cart' component={Cart}/>


      </Router>
    </div>
  )
}
