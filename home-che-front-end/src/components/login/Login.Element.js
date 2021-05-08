import styled from 'styled-components';
import { Input, Checkbox, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

export const LoginOrSignUpContainer = styled.form`
    background-color:#2D303E;
    height:25rem;
    margin:0 auto;
    display:flex;
    align-items:center;
    border-radius:11px;
    padding:10px;
    flex-direction:column;
    width:25rem;

@media screen and (max-width:425px){
    width:90%;
}

`;
export const Heading = styled.h2   `
color: #abbbc2;
    margin-bottom: 0;
`;

export const LoginInput = styled.input`
&&&{
    width:20rem;
    height:2rem;
    background-color:#2D303E;
    padding:10px;
    margin-top:27px;
    border:2px solid #393C49;
    outline:none;
    border-radius:8px;
    color:#ABBBC2;
    ::placeholder{
        color:#ABBBC2;
    }
}
    @media screen and (max-width:375px){
        &&&{
            width:18rem;
        }

    }`;
export const AgreementContainer = styled.div`
display:flex;
width:20rem;
height:2rem;
/* background-color:red; */
padding:10px;
display:flex;
align-items:center;
margin:10px;
@media screen and (max-width:375px){
        width:18rem;

    }
`;

export const CheckboxInput = styled.input`
    height: 20px;
    width: 20px;
background-color:red;
`;

export const AgreeText = styled.p`
    /* I agree to the terms of services */


    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    /* identical to box height */

    color: #ABBBC2;
    margin-left:5px;


`;

export const AgreeLink = styled(Link)`
color:#EA7C69;
`
export const SubmitButton = styled(Button)`
&&&{
    width: 20rem;
    height: 2rem;
    background-color: #393C49;
    color: #ABBBC2;
    padding: 18px;
    margin: 22px auto;
    margin-bottom: 0;
}
@media screen and (max-width:375px){
        width:18rem;

    }
`;

export const ToSignUpContainer = styled.div`
  width:20rem;
    height:2rem;
display:flex;
justify-content:flex-start;
`;
export const ToSignText = styled.p`
    /* I agree to the terms of services */


    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 11px;
    line-height: 19px;
    /* identical to box height */

    color: #ABBBC2;
    margin-left:5px;

text-align:right;
margin-top:20px;
`;
