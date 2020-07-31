import React, { useEffect , useState} from "react";
import App from "./App";
import Axios from "axios";
import styled from "styled-components";

const WrapperDiv=styled.div`
background-image:url(https://d39l2hkdp2esp1.cloudfront.net/img/photo/160498/160498_00_2x.jpg);
padding-bottom:770px`;



function Confirmation(props){
const [clientInfo,setClientInfo]=useState(
[{Full_Name:"",
Email:"",
Phone_Number:"",
Pref_Cont_Meth:"",
Username:"",
Password:"",
Verify_Pass:"",
Age_Group:"",
Goals:"",
Mon:false,
Tues:false,
Wed:false,
Thurs:false,
Fri:false,
Sat:false,
Sun:false,
Mornings:false,
Noon:false,
Evenings:false,
Nights:false,
Terms:false}])

useEffect(()=>{setClientInfo(props.newMember)},[props.newMember])
return(
    <WrapperDiv>

    {/* {console.log("???",clientInfo)} */}
<div key={clientInfo.id}>
    <h2>Thanks for joining Anywhere fitness! Heres your user info!</h2>
            <p>Name: {clientInfo.Full_Name}</p>
            <p>Email: {clientInfo.Email}</p>
            <p>Phone Number:{clientInfo.Phone_Number} </p>
            <p>Username: {clientInfo.Username}</p>
            <p>Password: {clientInfo.Password}</p>
        </div>
</WrapperDiv>
    
        /* {console.log("thisone",props)} */
        /* {clientInfo.map(()=>( 
         <div key={clientInfo.id}>
            <p>Name: {clientInfo.Full_Name}</p>
            <p>Email: {clientInfo.Email}</p>
            <p>Phone Number:{clientInfo.Phone_Number} </p>
            <p>Username: {clientInfo.Username}</p>
            <p>Password: {clientInfo.Password}</p>
        </div>
          ))} */
    
 
 

)
}



export default Confirmation;
