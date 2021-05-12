import React from "react";
import useForm from "../../hooks/useForm";
import { signUp } from "../../api/userApi";
import { useDispatch } from "react-redux";
import { userLoginFailed, userLoginRequest, userLoginSuccess } from "../../redux/actions/userAction";
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

  const dispatch = useDispatch();
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    dispatch(userLoginRequest());
    let response = await signUp(userState);
    if(response.success){
      dispatch(userLoginSuccess(response.data))
    }else{
      dispatch(userLoginFailed(response.data.error))
      
    }
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
