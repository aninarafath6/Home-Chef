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
            <LoginInput required placeholder='Email Address or Phone no' autoFocus={true} />
            <LoginInput required placeholder='Password' autoFocus={true} />
            <LoginInput required  placeholder='Conform Password' autoFocus={true} />
            <SubmitButton type='submit'>Login</SubmitButton>
            <ToSignUpContainer>
            <ToSignText>
            Don't have an account please <AgreeLink to='/'>sign up</AgreeLink> 
            </ToSignText>
            </ToSignUpContainer>
        </LoginOrSignUpContainer>
    )
}
