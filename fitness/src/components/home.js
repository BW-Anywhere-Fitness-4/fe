import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

const StyledLink2 = styled(Link)`
display: inline-block;
padding: .75rem 1rem;
margin: 1.618rem;
font-weight: 400;
text-align: center;
text-transform: uppercase;
color: #fff;
vertical-align: middle;
white-space: nowrap;
background-color:#45a4f2;


`;

const H1 =styled.h1`
font-size: 50px;
color: red;

`;
const StyledDiv = styled.div`

opacity: 0.5;

`;

export default function Home(){
    return(
        <div className="homepage">
            <StyledDiv>
            <H1>ANYWHERE FITNESS</H1>
            </StyledDiv>
            <StyledLink2 to="/clientReg">Sign up</StyledLink2>
            <StyledLink2 to="/login">Login</StyledLink2>
        </div>
    )
}
