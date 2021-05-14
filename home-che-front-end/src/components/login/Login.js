import React, { useEffect } from "react";
import { useHistory } from "react-router";
import useForm from "../../hooks/useForm";
import {
  LoginInput,
  LoginOrSignUpContainer,
  AgreeLink,
  SubmitButton,
  ToSignUpContainer,
  ToSignText,
  Heading,
} from "./Login.Element";

export default function LoginOrSignUp() {
  const history = useHistory(); 
  useEffect(()=>{
    // checking user is already registered
    localStorage.getItem('home-token') && history.push('/')
  },[history])

  const [userState, handelUserForm] = useForm({
    email: "",
    password: "",
  });
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(userState);
  };
  return (
    <LoginOrSignUpContainer onSubmit={onSubmitHandler}>
      <Heading>Login</Heading>
      <LoginInput
        type="email"
        required
        placeholder="Email Address"
        autoFocus={true}
        name="email"
        onChange={handelUserForm}
        value={userState.email}
      />
      <LoginInput
        type="password"
        required
        placeholder="Password"
        autoFocus={true}
        name="password"
        onChange={handelUserForm}
        value={userState.password}
      />
      <SubmitButton type="submit">Login</SubmitButton>
      <ToSignUpContainer>
        <ToSignText>
          Don't have an account please{" "}
          <AgreeLink to="/signUp">sign up</AgreeLink>
        </ToSignText>
      </ToSignUpContainer>
    </LoginOrSignUpContainer>
  );
}
