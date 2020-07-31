import React, { useEffect , useState} from "react";
import App from "../App"
import Axios from "axios";
import styled from "styled-components";

const WrapperDiv=styled.div`
background-image:url(https://d39l2hkdp2esp1.cloudfront.net/img/photo/160498/160498_00_2x.jpg);
padding-bottom:770px`;



function Confirmation(props){
const [clientInfo,setClientInfo]=useState(
[{   
    first_name:"",
    last_name: "",
    Email:"",
    Username:"",
    Password:""
}])

useEffect(()=>{setClientInfo(props.newMember)},[props.newMember])
return(
    <WrapperDiv>

    {/* {console.log("???",clientInfo)} */}
<div key={clientInfo.id}>
    <h2>Thanks for joining Anywhere fitness! Heres your user info!</h2>
            <p>First Name: {clientInfo.first_name}</p>
            <p>Last Name: {clientInfo.last_name}</p>
            <p>Email: {clientInfo.Email}</p>
            <p>Username: {clientInfo.Username}</p>
            <p>Password: {clientInfo.Password}</p>
        </div>
</WrapperDiv>
    
  
    
 
 

)
}



export default Confirmation;
