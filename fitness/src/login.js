import React,{useState,useEffect} from "react";
import * as Yup from "yup";
import axios from "axios";

export default function Login(){
    const defaultState={Username:"",Password:""};

    const [loginState,setLoginState]=useState(defaultState);

    const [errors,setErrors]=useState({...defaultState});

    const [buttonDisabled,setButtonDisabled]=useState(true);

    const [post, setPost] = useState([]);


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
                    console.log(`Form submitted successfully!`,res.data)
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
        <form onSubmit={loginSubmit}>
            <label>
                Username
                <input type="text" name="Username" id="usernameInput" placeholder="Username" onChange={inputChange} error={errors}/>
            </label><br></br><br></br>
            <label>
                Password
                <input type="text" name="Password" id="passwordInput" placeholder="Password" onChange={inputChange} error={errors}/>
            </label><br></br><br></br>
            <button disabled={buttonDisabled}>Login</button>
            <pre>{JSON.stringify(post, null, 2)}</pre>
        </form>

    )
};



