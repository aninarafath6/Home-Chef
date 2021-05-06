import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/header/Header';
import Home from './components/home/Home';
import Cart from './components/cart/Cart';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import React from 'react'
export default function App() {
  const scrollableNodeRef = React.createRef();
  return (

    <SimpleBar  autoHide={true} scrollableNodeProps={{ ref: scrollableNodeRef }}>
      <Router>
        <Header />
        <Route   exact path='/' component={Home}/>
        <Route   path='/home' component={Home}/>
        <Route   path='/cart' component={Cart}/>
      </Router>
    
      </SimpleBar>

  )
}
