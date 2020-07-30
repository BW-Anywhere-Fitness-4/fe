import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

 class Login extends React.Component {
state ={
    credentials: {
        username:"",
        password: ""
    }
};
handleChange = e =>{
    this.setState({
        credentials: {
            ...this.state.credentials,
            [e.target.name]: e.target.value
        }
    })
}

login = e =>{
    e.preventDefault()
    axiosWithAuth()
    .post("/api/users/login", this.state.credentials)
    .then(res =>{
        console.log(res)
        localStorage.setItem("token", res.data.payload);
        this.props.history.push("/home");
    })
    .catch(err => console.log(err))
}

    render(){
        return(
            <form onSubmit={this.login}>
            <label>
                Username
                <input 
                type="text" 
                name="username" 
                value={this.state.credentials.username}
                onChange={this.handleChange} 
                placeholder="Username" />
            </label>
            <label>
                Password
                <input 
                type="password" 
                name="password" 
                value={this.state.credentials.password}
                onChange={this.handleChange}
                placeholder="password" />
            </label>
            <button>Log In</button>
        </form>
        )
    }
 }

 

export default Login;
