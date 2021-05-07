import React from 'react'
import { 
    LoginInput, 
    LoginOrSignUpContainer,
    AgreementContainer,
    CheckboxInput,
    AgreeText,
    AgreeLink,
    SubmitButton,
    ToSignUpContainer,
    ToSignText
    } from './LoginOrSignup.Element';

export default function LoginOrSignUp() {
    
    return (
        <LoginOrSignUpContainer>
            <LoginInput required placeholder='Email Address or Phone no' autoFocus={true} />
            <LoginInput required placeholder='Password' autoFocus={true} />
            <LoginInput required  placeholder='Conform Password' autoFocus={true} />
            <AgreementContainer>
            <CheckboxInput required type='checkbox' />
            <AgreeText>
            I agree to the <AgreeLink to='/'>terms of services</AgreeLink> 
            </AgreeText>
            </AgreementContainer>
            
            <SubmitButton type='submit'>SignUp</SubmitButton>
            <ToSignUpContainer>
            <ToSignText>
            You don’t have a <br />account Please <AgreeLink to='/'>Sign Up</AgreeLink> 
            </ToSignText>
            </ToSignUpContainer>
        </LoginOrSignUpContainer>
    )
}
