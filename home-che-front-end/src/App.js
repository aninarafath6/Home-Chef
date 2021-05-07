import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/header/Header";
import { Pages } from './utils/Pages';
import Footer from './components/footer/Footer';
import Layout from './components/Layout'
export default function App() {
  return (
    <Layout>
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
        <Footer />
      </Router>
    </Layout>
  )
}
