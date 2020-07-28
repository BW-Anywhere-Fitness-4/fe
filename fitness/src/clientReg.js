import React,{useState,useEffect} from "react";
import {Route,Link} from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";
import Confirmation from "./confirmation";


function Form(props){
    const defaultState={
        Full_Name:"",
        Email:"",
        Phone_Number:"",
        Pref_Cont_Meth:"",
        Username:"",
        Password:"",
        Verify_Pass:"",
        Age_Group:"",
        Goals:"",
        Mon:"",
        Tues:"",
        Wed:"",
        Thurs:"",
        Fri:"",
        Sat:"",
        Sun:"",
        Mornings:"",
        Noon:"",
        Evenings:"",
        Nights:"",
        Terms:false
    }

    const [formState,setFormState]=useState({
        Full_Name:"n/a",
        Email:"n/a",
        Phone_Number:"n/a",
        Pref_Cont_Meth:"n/a",
        Username:"n/a",
        Password:"n/a",
        Verify_Pass:"n/a",
        Age_Group:"n/a",
        Goals:"n/a",
        Mon:"n/a",
        Tues:"n/a",
        Wed:"n/a",
        Thurs:"n/a",
        Fri:"n/a",
        Sat:"n/a",
        Sun:"n/a",
        Mornings:"n/a",
        Noon:"n/a",
        Evenings:"n/a",
        Nights:"n/a",
        Terms:false
    })

    const [errors,setErrors]=useState({...defaultState,terms:""        
        // Full_Name:"",
        // Email:"",
        // Phone_Number:"",
        // Pref_Cont_Meth:"",
        // Username:"",
        // Password:"",
        // Verify_Pass:"",
        // Age_Group:"",
        // Goals:"",
        // Mon:"",
        // Tues:"",
        // Wed:"",
        // Thurs:"",
        // Fri:"",
        // Sat:"",
        // Sun:"",
        // Mornings:"",
        // Noon:"",
        // Evenings:"",
        // Nights:"",
        // Terms:""
    });

    const [buttonDisabled,setButtonDisabled]=useState(true);

    const formSchema=Yup.object().shape({
        Full_Name:Yup
        .string()
        .required("Must Provide Name"),
        Email:Yup
        .string()
        .required("Must Provide Email"),
        Phone_Number:Yup
        .string()
        .required("Must Provide Phone Number"),
        Pref_Cont_Meth:Yup
        .string(),
        Username:Yup
        .string()
        .required("Must Create Username"),
        Password:Yup
        .string()
        .required("Must Create Password"),
        Verify_Pass:Yup
        .string()
        .required("Must Verify Password"),
        Age_Group:Yup
        .string(),
        Goals:Yup
        .string(),
        Mon: Yup
        .string(),
        Tues: Yup
        .string(),
        Wed: Yup
        .string(),
        Thurs: Yup
        .string(),
        Fri: Yup
        .string(),
        Sat: Yup
        .string(),
        Sun: Yup
        .string(),
        Mornings: Yup
        .string(),
        Noon: Yup
        .string(),
        Evenings: Yup
        .string(),
        Nights: Yup
        .string(),
        Terms:Yup
        .boolean()
        .oneOf([true],"Must Agree to Terms")
        
    })

    const [post, setPost] = useState([]);

    useEffect(()=>{
        formSchema.isValid(formState).then(valid=> setButtonDisabled(!valid));},[formState]);
    
        

    const formSubmit=e=>{
        e.preventDefault();
        console.log('submitted');
        
        
        axios
            .post('https://reqres.in/api/users', formState)
            .then((res)=>{ 
                setPost(res.data);
                console.log(`Form submitted successfully!`,res.data)
                props.setNewMember([...props.newMember, res.data]);
            })
            .catch(err=>console.log(err))
    };
const validation=e=>{
    e.persist();

     Yup
        .reach(formSchema,e.target.name)
        .validate(e.target.value)
        .then(valid=>{setErrors({...errors,[e.target.name]:''});})
        .catch(err=>{setErrors({...errors,[e.target.name]:err.errors[0]});})
        // setFormState({
        //     ...formState,[e.target.name]:e.target.value
        // });
}
const inputChange = e => {
        // e.persist();

        const value=e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setFormState({
            ...formState,
            [e.target.name]:value
            });
     validation(e)
       
      };
    // maybe multiple languages for choices
    return(
        <div>
            <form onSubmit={formSubmit} >
                <h2>Sign up!</h2>
                <label>Full Name
                    <input name="Full_Name" id="nameInput" placeholder='Full Name' onChange={inputChange} error={errors} />
                </label><br></br><br></br>
                <label>Email
                    <input name="Email" id="emailInput" placeholder='Email' onChange={inputChange} error={errors}/>
                </label><br></br><br></br>
                <label>Phone Number
                    <input name="Phone_Number" id="phoneInput" placeholder='Phone Number' onChange={inputChange} error={errors}/>
                </label><br></br><br></br>
                <p>Preferred contact method</p> 

                    
                <label>
                    <input type="radio" id="contact1" name="Pref_Cont_Meth" value="Email" onChange={inputChange}/>Email
                    <input type="radio" id="contact2" name="Pref_Cont_Meth" value="Call" onChange={inputChange}/>Call
                    <input type="radio" id="contact3" name="Pref_Cont_Meth" value="Text" onChange={inputChange}/>Text
                </label><br></br><br></br>
                <label>Username
                    <input name="Username" id="userNameInput" placeholder='Username' onChange={inputChange} error={errors}/>
                </label><br></br><br></br>
                <label>Password
                    <input name="Password" id="passwordInput" placeholder='abc123' onChange={inputChange} error={errors}/>
                </label><br></br><br></br>
                <label>Verify Password
                    <input name="Verify_Pass" id="verifyInput" placeholder='abc123' onChange={inputChange} error={errors}/>
                </label><br></br><br></br>
                <label>Age Group
                    <select name="Age_Group" id="ageInput" onChange={inputChange}>
                        <option value="Not specified">Select</option>
                        <option value="Ages 18-30">18-30</option>
                        <option value="Ages 31-45">31-45</option>
                        <option value="Ages 46-59">46-59</option>
                        <option value="Ages 60+">60+</option>
                    </select>

                </label><br></br><br></br>
               
                <label>Goals
                    <input type="text" name="Goals" id="goalsInput" placeholder='I want to...' onChange={inputChange} error={errors}/>
                </label><br></br><br></br>
                <p>Days Available</p>
                <label>
                    <input type="checkbox" id="mon" name="Mon" value="available" onChange={inputChange}/>
                    Monday
                    <input type="checkbox" id="tues" name="Tues" value="available" onChange={inputChange}/>
                    Tuesday
                    <input type="checkbox" id="wed" name="Wed" value="available" onChange={inputChange}/>
                    Wednesday
                    <input type="checkbox" id="thurs" name="Thurs" value="available"  onChange={inputChange}/>
                    Thursday<br></br><br></br>
                    <input type="checkbox" id="fri" name="Fri" value="available" onChange={inputChange}/>
                    Friday
                    <input type="checkbox" id="sat" name="Sat" value="available"  onChange={inputChange}/>
                    Saturday
                    <input type="checkbox" id="sun" name="Sun" value="available" onChange={inputChange}/>
                    Sunday
                    </label><br></br><br></br> 
                    <p>Times of Day Available</p>

                <label>
                    <input type="checkbox" id="mornings" name="Mornings" value="available" onChange={inputChange}/>Mornings
                    <input type="checkbox" id="noon" name="Noon" value="available" onChange={inputChange}/>Noon
                    <input type="checkbox" id="evenings" name="Evenings" value="available" onChange={inputChange}/>Evenings
                    <input type="checkbox" id="nights" name="Nights" value="available" onChange={inputChange}/>Nights
                </label><br></br><br></br><br></br>
                <label>Agree to Terms
                    <input type="checkbox" name="Terms" id="terms" onChange={inputChange} error={errors} />
                </label>
                <br></br><br></br>
                {/* <Link to='/confirmation'> */}
                    <button disabled={buttonDisabled}>Register</button>
                {/* </Link> */}
                <pre>{JSON.stringify(post, null, 2)}</pre>
            </form>
        </div>
    )
}

export default Form;