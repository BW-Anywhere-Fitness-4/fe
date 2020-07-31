import React,{useState} from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import './App.css';
import axios from "axios";
import InstructorSignUp from './components/instructorSignUp';
import InstructorSignIn from './components/instructorSignIn';
import InstructorConfirmation from './components/instructorConfirmation';
import Form from "./clientReg";
import Login from './components/login';
import Home from "./home";
import Confirmation from './confirmation';
import ClassList from './components/ClassList'
import AddClass from './components/AddClass'
import ClassEdit from './components/ClassEdit'
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




function App(props) {
  const [newMember, setNewMember]=useState([{
    first_name:"",
    last_name: "",
    Email:"",
    Username:"",
    Password:""}]

);
const clientDataSetup=(data)=>{setNewMember({...newMember,
  first_name:data.first_name,
  last_name:data.last_name,
  Email:data.Email,
  Username:data.Username,
  Password:data.Password})}




  return (
    
    <div className="App">
      <WrapperDiv>
        <StyledHead>Anywhere Fitness</StyledHead>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/classList"> classList</Link>
        <Link to="/addClass">Add Class</Link>
      </nav></WrapperDiv>
      
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

        
        <Route render={(props)=><ClassList {...props} />}exact path ="/classList">
          
        </Route>
        <Route exact path ="/addClass">
          <AddClass />
        </Route>
       <Route exact path ="/classEdit/:id">
         <ClassEdit />
       </Route>
      </Switch>
      <Footer><Link>Contact Us</Link></Footer>
    </div>
   
  );
}

export default App;
