import React from 'react';
import './App.css';
import InstructorSignUp from './components/instructorSignUp';
import InstructorSignIn from './components/instructorSignIn';
import { Route } from "react-router-dom";
function App() {
  return (


    <div className="App">


      <Route path="/instructorSignUp" component={InstructorSignUp} />
      <Route path="/instructorSignIn" component={InstructorSignIn} />


    </div>


  );
}

export default App;


