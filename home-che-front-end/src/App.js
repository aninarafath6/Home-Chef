import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/header/Header';
import Home from './components/home/Home';
export default function App() {
  return (
    <div>
      <Router>
        <Header />
        <Route   exact path='/' component={Home}/>
      </Router>
    </div>
  )
}
