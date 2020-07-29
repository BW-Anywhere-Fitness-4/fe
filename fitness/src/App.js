import React,{useState} from 'react';
import {Route,Link,Switch} from "react-router-dom";
import './App.css';
import Form from "./clientReg";
import Login from './login';
import Home from "./home";
import Confirmation from './confirmation';
import About from './about';

function App() {
  const [newMember, setNewMember]=useState([]);
  // const newMember={newMember};
  // const setNewMember={setNewMember};
  return (
    <div className="App">

      <h1>Anywhere Fitness</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Switch>
        <Route exact path="/clientReg">
          <Form newMember={newMember} setNewMember={setNewMember}/>
        </Route>
        <Route exact path="/login" component={Login} />
        <Route exact path="/confirmation">
          <Confirmation newMember={newMember}/>
        </Route>
        <Route exact path="/about" component={About}/>
        <Route exact path="/" component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
