import React,{useState,useEffect} from "react";
import * as Yup from "yup";
import axios from "axios";
import styled from "styled-components";
import {useHistory} from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';

const WrapperDiv=styled.div`
background-image:url(https://lakecountyphysicaltherapy.com/wp-content/uploads/2020/06/AdobeStock_166350907.jpeg);
background-size:cover;
height:75vh;
`;

const FormWrapper=styled.div`
background:white;
width:25vw;
margin-left:37.5vw;
opacity:85%;
justify-content:center;
padding:1rem;
color:#2F71A1;
`;

const Button=styled.button`
background:#45A4F2;
color:white;
`;

export default function Login(){
    const defaultState={Username:"",Password:""};

    const [loginState,setLoginState]=useState(defaultState);

    const [errors,setErrors]=useState({...defaultState});

    const [buttonDisabled,setButtonDisabled]=useState(true);

    const [post, setPost] = useState([]);

    const history = useHistory();

    const loginSchema=Yup.object().shape({
        Username: Yup.string().required("Must enter Username"),
        Password: Yup.string().required("Must provide Password")
    })

    useEffect(()=>{
        loginSchema.isValid(loginState).then(valid=> setButtonDisabled(!valid));},[loginState]);

        const loginSubmit=e=>{
            e.preventDefault();
            console.log('submitted');
            
            
            axios
                .post('https://reqres.in/api/users', loginState)
                .then((res)=>{ 
                    setPost(res.data);
                    console.log('Form submitted successfully!',res.data)
                    history.push('/classList')
                })
                .catch(err=>console.log(err))
        };

    const inputChange=e=>{    
        e.persist();
        setLoginState({
            ...loginState,
            [e.target.name]:e.target.value
            });
        Yup
           .reach(loginSchema,e.target.name)
           .validate(e.target.value)
           .then(valid=>{setErrors({...errors,[e.target.name]:''});})
           .catch(err=>{setErrors({...errors,[e.target.name]:err.errors[0]});})}

    return(
        <WrapperDiv>
        <FormWrapper>
        <form onSubmit={loginSubmit}>
            <label>
                Username
                <input 
                type="text" 
                name="Username" 
                id="usernameInput" 
                placeholder="Username" 
                onChange={inputChange} 
                error={errors}/>
            </label><br></br><br></br>
            <label>
                Password
                <input 
                type="password" 
                name="Password" 
                id="passwordInput" 
                placeholder="Password" 
                onChange={inputChange} 
                error={errors}/>
            </label><br></br><br></br>
            <Button disabled={buttonDisabled}>Login</Button>
            
        </form>
        </FormWrapper>
        </WrapperDiv>
    )
};



