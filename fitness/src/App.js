import React,{useState} from 'react';
import {Route,Link} from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import Form from "./clientReg";
import Login from './login';
import Home from "./home";
import Confirmation from './confirmation';
// import {Link,Route} from "react-router-dom"

function App() {
  // const [newMember, setNewMember]=useState([]);
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h1>Anywhere Fitness</h1>
      <ul>
        <Link to="/home"><li>Home</li></Link>
        <Link><li>About</li></Link>
      </ul>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/clientReg" component={Form}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/confirmation" component={Confirmation}/>
      {/* <button><Link to="/clientReg">Sign up</Link></button>
      <button><Link to="/login">Login</Link></button>
    
      <Route exact path="/clientReg" component={Form}/>
      <Route exact path="/login" component={Login}/> */}
    </div>
  );
}

export default App;
