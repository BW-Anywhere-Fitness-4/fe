import React,{useState} from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import Form from "./clientReg";
import Login from './components/login';
import Home from "./home";
import Confirmation from './confirmation';
// import {Link,Route} from "react-router-dom"
import ClassList from './components/ClassList'

function App() {
  // const [newMember, setNewMember]=useState([]);
  return (
    <Router>
    
      <h1>Anywhere Fitness</h1>
      <ul>
        <Link to="/home"><li>Home</li></Link>
        <Link to ="/classList">Class List</Link>
      </ul>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/clientReg" component={Form}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/confirmation" component={Confirmation}/>
      {/* <button><Link to="/clientReg">Sign up</Link></button>
      <button><Link to="/login">Login</Link></button>
    
      <Route exact path="/clientReg" component={Form}/>
      <Route exact path="/login" component={Login}/> */}
      <Route exact path ="/classList" component = {ClassList} />
      
    </Router>
  );
}

export default App;
