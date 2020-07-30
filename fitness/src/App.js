import React,{useState} from 'react';
import {Route,Link,Switch} from "react-router-dom";
import './App.css';
import Form from "./clientReg";
import Login from './login';
import Home from "./home";
import Confirmation from './confirmation';
import About from './about';

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
      <h1>Anywhere Fitness</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
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
    </div>
  );
}

export default App;
