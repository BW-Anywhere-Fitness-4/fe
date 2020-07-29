import React from "react";
// import Form from "./clientReg";

function Confirmation(props){
    // const [newMember, setNewMember]=useState([]);
return(
<div>
    <h2>Thanks for joining Anywhere fitness! Heres your login info!</h2>
    {/* <Form newMember={newMember} setNewMember={setNewMember}/> */}
    
        {props.newMember.map(member=>( 
         <div key={member.id}>
            <p>Name: {member.Full_Name}</p>
            <p>Email: {member.Email}</p>
            <p>Phone Number:{member.Phone_Number} </p>
            <p>Username: {member.Username}</p>
            <p>Password: {member.Password}</p>
        </div>
          ))}
    
 </div>  

)
}



export default Confirmation;