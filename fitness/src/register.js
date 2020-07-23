import React from "react";
function Form(){

    // maybe multiple languages for choices
    return(
        <div>
            <form>
                <h2>Sign up!</h2>
                <label>Full Name
                    <input name="name" id="nameInput" placeholder='Full Name'/>
                </label><br></br><br></br>
                <label>Email
                    <input name="email" id="emailInput" placeholder='Email'/>
                </label><br></br><br></br>
                <label>Phone Number
                    <input name="phone" id="phoneInput" placeholder='Phone Number'/>
                </label><br></br><br></br>
                <label>Preferred contact method
                    <select>
                        <option value="Select">Select</option>
                        <option value="Email">Email</option>
                        <option value="Phone">Phone</option>
                    </select>
                    {/* <input type="radio" id="contact1" name="contact1" value="email"/>
                    <input type="radio" id="contact2" name="contact2" value="phone"/> */}
                </label><br></br><br></br>
                <label>Username
                    <input name="userName" id="userNameInput" placeholder='Username'/>
                </label><br></br><br></br>
                <label>Password
                    <input name="password" id="passwordInput" placeholder='abc123'/>
                </label><br></br><br></br>
                <label>Verify Password
                    <input name="verify" id="verifyInput" placeholder='abc123'/>
                </label><br></br><br></br>
                <label>Age Group
                    <select>
                        <option value="Select">Select</option>
                        <option value="Age: 18-30">18-30</option>
                        <option value="Age: 31-45">31-45</option>
                        <option value="Age: 46-59">46-59</option>
                        <option value="Age: 60+">60+</option>
                    </select>
                    {/* <input type="radio" id="age1" name="age" value="18-30"/>
                    <input type="radio" id="age2" name="age" value="31-45"/>
                    <input type="radio" id="age3" name="age" value="46-59"/>
                    <input type="radio" id="age4" name="age" value="60+"/> */}
                </label><br></br><br></br>
                <label>Goals
                    <input type="text" name="goals" id="goalsInput" placeholder='I want to...'/>
                </label><br></br><br></br>
                <p>Days Available</p>
                <label>
                    <input type="radio" id="mon" name="mon" value="Monday"/>
                    Monday
                    <input type="radio" id="tues" name="tues" value="Tuesday"/>
                    Tuesday
                    <input type="radio" id="wed" name="wed" value="Wednesday"/>
                    Wednesday
                    <input type="radio" id="thurs" name="thurs" value="Thursday"/>
                    Thursday<br></br>
                    <input type="radio" id="fri" name="fri" value="Friday"/>
                    Friday
                    <input type="radio" id="sat" name="sat" value="Saturday"/>
                    Saturday
                    <input type="radio" id="sun" name="sun" value="Sunday"/>
                    Sunday
                    </label><br></br><br></br>
                <label>Terms
                    <input type="checkbox" name="terms" id="terms"/>
                </label><br></br><br></br>
                <button>Register</button>
            </form>
        </div>
    )
}

export default Form;