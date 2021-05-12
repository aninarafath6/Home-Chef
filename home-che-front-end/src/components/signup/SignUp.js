import React from "react";
import useForm from "../../hooks/useForm";
import { signUp } from "../../api/userApi";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

// importing auth actions
import {
  userSignUpFailed,
  userSignUpRequest,
  userSignUpSuccess,
} from "../../redux/actions/authAction";

// importing styled components
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
  // getting auth state from redux state using useSelector hook
  const { isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();

  // custom form hook
  const [userState, handelUserForm] = useForm({
    username: "",
    email: "",
    password: "",
  });

  const onSubmitHandler = async (e) => {
    // prevent reloading
    e.preventDefault();
    // setting user login request value
    dispatch(userSignUpRequest());
    try {
      //calling sign up api
      let response = await signUp(userState);
      // checking response is success
      if (response.success) {
        // redirecting to home page
        history.push("/");
        // alert('welcome to home chef')
        // if succuss calling user success action
        return dispatch(userSignUpSuccess());
      } else {
        // if err calling user failed action
        return dispatch(userSignUpFailed(response.data.error));
      }
    } catch (error) {
      // catching err
      return dispatch(userSignUpFailed(error.message));
    }
  };
  return (
    // return jsx sign up page
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
      <SubmitButton type="submit">
        {isLoading ? "Loading..." : "Sign Up"}
      </SubmitButton>
      <ToSignUpContainer>
        <ToSignText>
          Do you have an account please{" "}
          <AgreeLink to="/signIn">login</AgreeLink>
        </ToSignText>
      </ToSignUpContainer>
    </LoginOrSignUpContainer>
  );
}
