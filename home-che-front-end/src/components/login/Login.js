import React from 'react'
import { 
    LoginInput, 
    LoginOrSignUpContainer,
    AgreeLink,
    SubmitButton,
    ToSignUpContainer,
    ToSignText,
    Heading
    } from './Login.Element';

export default function LoginOrSignUp() {
    
    return (
        <LoginOrSignUpContainer>
            <Heading>Login</Heading>
            <LoginInput type='email' required placeholder='Email Address' autoFocus={true} />
            <LoginInput type='password' required placeholder='Password' autoFocus={true} />
            <SubmitButton type='submit'>Login</SubmitButton>
            <ToSignUpContainer>
            <ToSignText>
            Don't have an account please <AgreeLink to='/signUp'>sign up</AgreeLink> 
            </ToSignText>
            </ToSignUpContainer>
        </LoginOrSignUpContainer>
    )
}