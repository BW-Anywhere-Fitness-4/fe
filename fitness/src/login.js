import React from "react";

export default function Login(){
    return(
        <form>
            <label>
                Username
                <input type="text" name="username" id="usernameInput" placeholder="Username" />
            </label>
            <label>
                Password
                <input type="text" name="password" id="passwordInput" placeholder="password" />
            </label>
        </form>

    )
};



