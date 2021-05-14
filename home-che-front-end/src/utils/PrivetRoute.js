import React, { useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userSignUpSuccess } from "../redux/actions/authAction";

function PrivetRoute({ component: Component, ...rest }) {
  const { isLogged } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    !isLogged &&
      localStorage.getItem("home-token") &&
      dispatch(userSignUpSuccess());
  }, [dispatch]);

  return (
    <Route
      {...rest}
      render={() => (isLogged ? <Component /> : <Redirect to="/signIn" />)}
    />
  );
}

export default PrivetRoute;
