import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/header/Header";
import { Pages } from './utils/Pages';

export default function App() {
  return (
    <div>
      <Router>
        <Header />

        {Pages.map((page, i) => {
                return (
                  <Route
                    exact
                    path={page.pageLink}
                    component={page.view}
                    key={i}
                  />
                );
              })}
              
      </Router>
    </div>
  )
}
