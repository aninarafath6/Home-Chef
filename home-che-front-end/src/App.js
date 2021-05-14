import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Layout from "./utils/Layout";

// privet route
import PrivetRoute from "./utils/PrivetRoute";
import { Pages } from "./utils/Pages";

export default function App() {
  return (
    <Layout>
      <Router>
        <Header />
        {Pages.map((page, i) => {
          return page.privetRoute ? (
            <PrivetRoute
              exact
              path={page.pageLink}
              component={page.view}
              key={i}
            />
          ) : (
            <Route exact path={page.pageLink} component={page.view} key={i} />
          );
        })}
        <Footer />
      </Router>
    </Layout>
  );
}
