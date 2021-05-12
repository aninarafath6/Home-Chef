import React from "react";
import useForm from "../../hooks/useForm";
import {
  LoginInput,
  LoginOrSignUpContainer,
  AgreeLink,
  SubmitButton,
  ToSignUpContainer,
  ToSignText,
  Heading,
} from "./Signup.Element";

export default function LoginOrSignUp() {
  const [userState, handelUserForm] = useForm({
    username: "",
    email: "",
    password: "",
  });

  
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(userState);
  };
  return (
    <LoginOrSignUpContainer onSubmit={onSubmitHandler}>
      <Heading>Sign Up</Heading>
      <LoginInput
        type="text"
        required
        placeholder="Username"
        autoFocus={true}
        name="username"
        onChange={handelUserForm}
        value={userState.username}
      />
      <LoginInput
        type="email"
        required
        placeholder="Email Address"
        name="email"
        autoFocus={true}
        onChange={handelUserForm}
        value={userState.email}
      />
      <LoginInput
        type="password"
        required
        placeholder="Password"
        name="password"
        autoFocus={true}
        onChange={handelUserForm}
        value={userState.password}
      />
      <SubmitButton type="submit">Login</SubmitButton>
      <ToSignUpContainer>
        <ToSignText>
          Do you have an account please{" "}
          <AgreeLink to="/signIn">login</AgreeLink>
        </ToSignText>
      </ToSignUpContainer>
    </LoginOrSignUpContainer>
  );
}
