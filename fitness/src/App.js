import React,{useState} from 'react';
import {Route,Link,Switch} from "react-router-dom";
import './App.css';
import Form from "./clientReg";
import Login from './components/login';
import Home from "./home";
import Confirmation from './confirmation';
import About from './about';
import styled from "styled-components";

const WrapperDiv=styled.div`
background-image:url(https://i.pinimg.com/originals/ca/13/d7/ca13d709f44fb8937dc5cc86c2d3f0f3.jpg);
background-size:contain;

color:#C1C5C5;
padding:1rem;
`; 
const Footer=styled.div`
background:#08090C;
padding:8vh`;

const StyledHead=styled.h1`
word-spacing:30rem;
padding-right:8rem;
`;


// const StyledText=styled.nav`
// background:black;
// width:35vw;
// height:4vh;
// padding-left:1rem;
// `;

function App(props) {
  const [newMember, setNewMember]=useState([{
    Full_Name:"",
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
    Terms:false}]

);
const clientDataSetup=(data)=>{setNewMember({...newMember,Full_Name:data.Full_Name,
Email:data.Email,
Phone_Number:data.Phone_Number,
Username:data.Username,
Password:data.Password})}

  // const newMember={newMember};
  // const setNewMember={setNewMember};

//   function test(data){
   
// setNewMember(data)
// console.log("works",newMember)
//   }
  return (
    
    <div className="App">
      <WrapperDiv>
        <StyledHead>Anywhere Fitness</StyledHead>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav></WrapperDiv>
      {console.log("Member Data",newMember)}
      <Switch>
        <Route exact path="/clientReg">
          <Form newMember={newMember} setNewMember={setNewMember} 
          clientDataSetup={clientDataSetup} 
          />
        </Route>
        <Route exact path="/login" component={Login} />
        <Route exact path="/confirmation">
          {console.log("new",newMember)}
          <Confirmation newMember={newMember}  
          clientDataSetup={clientDataSetup}
          />
        </Route>
        <Route exact path="/about" component={About}/>
        <Route exact path="/" component={Home}/>

      </Switch>
      <Footer><Link>Contact Us</Link></Footer>
    </div>
   
  );
}

export default App;
