import React from 'react'
import { 
    LoginInput, 
    LoginOrSignUpContainer,
    AgreeLink,
    SubmitButton,
    ToSignUpContainer,
    ToSignText,
    Heading
    } from './Signup.Element';

export default function LoginOrSignUp() {
    
    return (
        <LoginOrSignUpContainer>
            <Heading>Sign Up</Heading>
            <LoginInput type='text' required placeholder='Username' autoFocus={true} />
            <LoginInput type='email' required placeholder='Email Address' autoFocus={true} />
            <LoginInput type='password' required placeholder='Password' autoFocus={true} />
            <SubmitButton type='submit'>Login</SubmitButton>
            <ToSignUpContainer>
            <ToSignText>
            Do you have an account please <AgreeLink to='/signIn'>login</AgreeLink> 
            </ToSignText>
            </ToSignUpContainer>
        </LoginOrSignUpContainer>
    )
}
