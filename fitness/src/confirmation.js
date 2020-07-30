import React, { useEffect , useState} from "react";
import App from "./App";
import Axios from "axios";

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
<div> 
    {console.log("???",clientInfo)}
<div key={clientInfo.id}>
    <h2>Thanks for joining Anywhere fitness! Heres your user info!</h2>
            <p>Name: {clientInfo.Full_Name}</p>
            <p>Email: {clientInfo.Email}</p>
            <p>Phone Number:{clientInfo.Phone_Number} </p>
            <p>Username: {clientInfo.Username}</p>
            <p>Password: {clientInfo.Password}</p>
        </div>

    
        {/* {console.log("thisone",props)} */}
        {/* {clientInfo.map(member=>( 
         <div key={member.id}>
            <p>Name: {member.Full_Name}</p>
            <p>Email: {member.Email}</p>
            <p>Phone Number:{member.Phone_Number} </p>
            <p>Username: {member.Username}</p>
            <p>Password: {member.Password}</p>
        </div>
          ))} */}
    
 </div>  

)
}



export default Confirmation;