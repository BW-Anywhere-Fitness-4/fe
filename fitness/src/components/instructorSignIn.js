import React, { ReactDOM, useState } from 'react';
import styled from 'styled-components';
import { Route, Link, Redirect } from "react-router-dom";
const Styledlabel = styled.label`
margin-top: 24px;
margin-bottom: 8px;
  display: block;
  color: black;
`;

const Styledform = styled.form`


max-width: 320px;
padding: 2rem;
  margin-top: 2rem;
  margin-right: auto;
  margin-left: auto;
  max-width: remy(380px);
  background-color: #fff;
  border-radius: $radius;
  box-shadow: 0 15px 35px rgba(50,50,93,.1),0 5px 15px rgba(0,0,0,.07);

  h2{
    margin-bottom: 3rem;
  }
`;

const Styledbutton = styled.button`
display: inline-block;
  padding: .75rem 1rem;
  margin: 1.618rem;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
  color: #fff;
  vertical-align: middle;
  white-space: nowrap;
  background-color: #ffa0a0;
  border: 1px solid transparent;
  box-shadow: 0 15px 35px rgba(50,50,93,.1),0 5px 15px rgba(0,0,0,.07);
  cursor: pointer;
  user-select: none;
  @include transition;
  
  &:focus,
  &:hover {
    background-color: lighten($color-primary, 13%);
    box-shadow: 0 18px 35px rgba(50,50,93,.1),0 8px 15px rgba(0,0,0,.07);
  }
  
  &:focus {
    outline: 0;
  }
`;


const StyledInput = styled.input`

padding: 8px;
width: 80%;
border-top: 0;
border-right: 0;
border-bottom: 1px solid #bdc3c7;
border-left: 0;
transition: border-bottom-color .15s ease-in;
`;




const InstrutorSignIn = props => {

    const [formData, setFormData] = useState(
        {
            email: 'weng@g.com',
            password: ''

        }


    );

    const [loginData, setLoginData] = useState(
        {
            email: '',
            password: ''
        }
    )

    const handleChange = (e) => {
        e.persist();
        setLoginData({
            ...loginData,
            [e.target.id]: e.target.value
        });
    }

    const handlesubmit = (e) => {
        e.preventDefault();

        setFormData({
            ...formData,
            email: loginData.email,
            password: loginData.password
        });




    }





    return (


        <Styledform >

            <h2>Sign In</h2>
            <Input
                hasLabel='true'
                htmlFor='email'
                label='Email'
                required='true'
                type='email'
                value={loginData.email}
                handleChange={handleChange}

            />



            <Input
                hasLabel='true'
                htmlFor='password'
                label='Password'
                required='true'
                type='password'
                value={loginData.password}
                handleChange={handleChange}
            />





            <Button
                type='submit'
                value='submit'
                text='Sign In'
                onClick={handlesubmit}
            />

            <Link to="/instructorSignUp">
                <Button

                    value='submit'
                    text='Sign up'
                    link={true}

                />
            </Link>



            {console.log(
                'formData is', formData
            )}

        </Styledform>

    )


}



export default InstrutorSignIn;



// Create component for input
const Input = props => {
    return (
        <>
            <Label
                hasLabel={props.hasLabel}
                htmlFor={props.htmlFor}
                label={props.label}
            />

            <StyledInput
                id={props.htmlFor}
                max={props.max || null}
                min={props.min || null}
                name={props.name || null}
                placeholder={props.placeholder || null}
                required={props.required || null}
                step={props.step || null}
                type={props.type || 'text'}
                value={props.value}
                onChange={props.handleChange}
            />
        </>
    );
}

// Create component for button
const Button = props => {
    if (props.link == true) {
        console.log(props.link)
        console.log('history', props.history)
        return (

            <Styledbutton
                type={props.type || 'button'}
                value={props.value || null}
            >
                Sign UP
            </Styledbutton>


        );

    } else {

        return (
            <>
                <Styledbutton
                    type={props.type || 'button'}
                    value={props.value || null}
                    onClick={props.onClick}
                >
                    {props.text}
                </Styledbutton>
            </>
        );
    }
}



// Create component for label
const Label = props => {

    if (props.hasLabel === 'true') {
        return <Styledlabel htmlFor={props.htmlFor}>{props.label}</Styledlabel>
    }

}







