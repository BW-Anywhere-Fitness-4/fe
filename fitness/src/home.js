import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

const Button=styled.div`
background:#45A4F2;
color:white;
`;

export default function Home(){
    return(
        <div>
            <h2>at anywhere fitness we...</h2>
            <Button><Link to="/clientReg">Sign up</Link></Button>
            <Button><Link to="/login">Login</Link></Button>
        </div>
    )
}