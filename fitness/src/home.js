import React from "react";
import Form from "./clientReg";
import Login from './login';
import {Link,Route} from "react-router-dom";

export default function Home(){
    return(
        <div>
            <h2>at anywhere fitness we...</h2>
            <button><Link to="/clientReg">Sign up</Link></button>
            <button><Link to="/login">Login</Link></button>
        </div>
    )
}