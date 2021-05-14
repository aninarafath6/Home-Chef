import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivetRoute({ component, ...rest }) {
  const { isLogged } = useSelector((state) => state.auth);
  return (
    <Route
      {...rest}
      render={() => (isLogged ? component : <Redirect to="/signIn" />)}
    />
  );
}

export default PrivetRoute;
