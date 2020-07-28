import React, { ReactDOM, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import * as Yup from "yup";
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

  background-color: ${props => (
        // console.log('style props', props.disabled)
        props.disabled === false ? '#ffa0a0' : 'gray'
    )
    };
border: 1px solid transparent;
box - shadow: 0 15px 35px rgba(50, 50, 93, .1), 0 5px 15px rgba(0, 0, 0, .07);
cursor: pointer;
user - select: none;
@include transition;
  
  &: focus,
  &: hover {
    background - color: lighten($color - primary, 13 %);
    box - shadow: 0 18px 35px rgba(50, 50, 93, .1), 0 8px 15px rgba(0, 0, 0, .07);
}
  
  &: focus {
    outline: 0;
}
`;


const StyledInput = styled.input`

padding: 8px;
width: 80 %;
border - top: 0;
border - right: 0;
border - bottom: 1px solid #bdc3c7;
border - left: 0;
transition: border - bottom - color .15s ease -in;
`;




const InstrutorSignUp = props => {

    const [formData, setFormData] = useState(
        {
            email: 'weng@g.com',
            password: '',
            specialty: '',
            phoneNumber: '',
            daysAvailable: {
                Monday: false,
                Tuesday: false,
                Wednesday: false,
                Thursday: false,
                Friday: false,
                Saturday: false,
                Sunday: false
            },
            TimesofDayAvailable: {
                Monday: false,
                Tuesday: false,
                Wednesday: false,
                Thursday: false,
                Friday: false,
                Saturday: false,
                Sunday: false,
            },

        }


    );

    const [signUpData, setSignUpData] = useState(
        {
            email: '',
            password: '',
            verifyPW: '',
            Specialty: '',
            phoneNumber: '',
            daysAvailable: {
                Monday: false,
                Tuesday: false,
                Wednesday: false,
                Thursday: false,
                Friday: false,
                Saturday: false,
                Sunday: false,
            },
            TimesofDayAvailable: {
                Monday: false,
                Tuesday: false,
                Wednesday: false,
                Thursday: false,
                Friday: false,
                Saturday: false,
                Sunday: false,
            },
            terms: ''
        }
    )

    const handleChange = (e) => {
        e.persist();

        // yup.reach will allow us to "reach" into the schema and test only one part.
        // We give reach the schema as the first argument, and the key we want to test as the second.
        Yup
            .reach(formSchema, e.target.id)
            //we can then run validate using the value
            .validate(e.target.id === 'terms' ? e.target.checked : e.target.value)
            // if the validation is successful, we can clear the error message
            .then(valid => {
                setErrors({
                    ...errors,
                    [e.target.id]: ""
                });
            })
            /* if the validation is unsuccessful, we can set the error message to the message 
              returned from yup (that we created in our schema) */
            .catch(err => {
                setErrors({
                    ...errors,
                    [e.target.id]: err.errors[0]
                });

            });

        // Wether or not our validation was successful, 
        //we will still set the state to the new value as the user is typing

        if (e.target.id === 'daysAvailable') {
            console.log('e.target.name', e.target.name)
            console.log('e.target.checked', e.target.checked)
            setSignUpData({
                ...signUpData,
                [e.target.id]: {
                    ...signUpData.daysAvailable,
                    [e.target.name]: !e.target.checked
                }
            });

            console.log('signUpData.daysAvailable', signUpData.daysAvailable)
        } else {
            setSignUpData({
                ...signUpData,
                [e.target.id]: e.target.value
            });


        }






    }

    const handleChangeNoYep = (e) => {
        e.persist();

        setSignUpData({
            ...signUpData,
            [e.target.id]: e.target.value
        });
    }



    const handlesubmit = (e) => {
        e.preventDefault();

        setFormData({
            ...formData,
            email: signUpData.email,
            password: signUpData.password
        });
        console.log(formData)

    }




    const formSchema = Yup.object().shape({
        email: Yup
            .string()
            .email("Must be a valid email address.")
            .required("Must include email address."),
        password: Yup
            .string()
            .min(4, "Passwords must be at least 4 characters long.")
            .required("Password is required"),

        terms: Yup
            .boolean()
            .oneOf([true], "You must accept Terms and Conditions"),
        // verifyPW: Yup
        //     .string()
        //     .matches(signUpData.password, "Password does not match")
        //     .required("Password confirmation is Required")

        verifyPW: Yup
            .string().oneOf([signUpData.password, null], "Passwords don't match")
            .required('Confirm password is required'),

        daysAvailable: Yup
            .string()
            .required('Days available is required'),

        TimesofDayAvailable: Yup
            .string()
            .required('Times of day available is required')

    });

    // State for the error messages
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        verifyPW: "",
        daysAvailable: "",
        TimesofDayAvailable: "",
        terms: ""
    });

    const [buttonDisabled, setButtonDisabled] = useState({ valid: false });


    useEffect(() => {
        /* We pass the entire state into the entire schema, no need to use reach here. 
        We want to make sure it is all valid before we allow a user to submit
        isValid comes from Yup directly */
        formSchema.isValid(signUpData).then(validForm => {

            setButtonDisabled(
                {
                    ...buttonDisabled,
                    valid: validForm
                }
            );
        });

    }, [signUpData]);



    return (


        <Styledform >

            <h2>Sign Up</h2>
            <Input
                hasLabel='true'
                htmlFor='email'
                label='Email'
                required='true'
                type='email'
                value={signUpData.email}
                handleChange={handleChange}

            />
            {errors.email.length > 0 ? (<p className="error">{errors.email}</p>) : null}


            <Input
                hasLabel='true'
                htmlFor='password'
                label='Password'
                required='true'
                type='password'
                value={signUpData.password}
                handleChange={handleChange}
            />
            {errors.password.length > 0 ? (<p className="error">{errors.password}</p>) : null}

            <Input
                hasLabel='true'
                htmlFor='verifyPW'
                label='Confirm password'
                required='true'
                type='password'
                value={signUpData.verifyPW}
                handleChange={handleChange}
            />
            {errors.verifyPW.length > 0 ? (<p className="error">{errors.verifyPW}</p>) : null}

            <Input
                hasLabel='true'
                htmlFor='Specialty'
                label='Specialty'
                type='input'
                value={signUpData.Specialty}
                handleChange={handleChangeNoYep}
            />

            <Input
                hasLabel='true'
                htmlFor='phoneNumber'
                label='Phone Number'
                type='text'
                value={signUpData.phoneNumber}
                handleChange={handleChangeNoYep}
            />



            <Label
                hasLabel='true'
                htmlFor='daysAvailable'
                label='Days Available'
            />

            <MutiCheckbox
                hasLabel='true'
                htmlFor='daysAvailable'
                label='Monday'
                name='Monday'

                handleChange={handleChange}

                value={signUpData.daysAvailable.Monday}
            />
            <MutiCheckbox
                hasLabel='true'
                htmlFor='daysAvailable'
                label='Tuesday'
                handleChange={handleChange}
                checked={signUpData.daysAvailable.Tuesday}
            />
            <MutiCheckbox
                hasLabel='true'
                htmlFor='daysAvailable'
                label='Wednesday'
                handleChange={handleChange}
                checked={signUpData.daysAvailable.Wednesday}
            />
            <MutiCheckbox
                hasLabel='true'
                htmlFor='daysAvailable'
                label='Thursday'
                handleChange={handleChange}
                checked={signUpData.daysAvailable.Thursday}
            />
            <MutiCheckbox
                hasLabel='true'
                htmlFor='daysAvailable'
                label='Friday'
                handleChange={handleChange}
                checked={signUpData.daysAvailable.Friday}
            />
            <MutiCheckbox
                hasLabel='true'
                htmlFor='daysAvailable'
                label='Saturday'
                handleChange={handleChange}
                checked={signUpData.daysAvailable.Saturday}
            />
            <MutiCheckbox
                hasLabel='true'
                htmlFor='daysAvailable'
                label='Sunday'
                handleChange={handleChange}
                checked={signUpData.daysAvailable.Sunday}
            />



            <Styledlabel htmlFor="terms"></Styledlabel>
               I agree to the terms and conditions
            <input type="checkbox" id="terms" onChange={handleChange}></input>

            {errors.terms.length > 0 ? (<p className="error">{errors.terms}</p>) : null}

            <Button
                type='submit'
                value='submit'
                text='Sign Up'
                onClick={handlesubmit}
                disabled={!buttonDisabled.valid}
            />

            <Link to="/instructorSignIn">
                <Button

                    value='submit'
                    text='Sign In'
                    link={true}
                    disabled={false}

                />
            </Link>





        </Styledform>

    )


}



export default InstrutorSignUp;



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
    if (props.link === true) {

        return (

            <Styledbutton
                type={props.type || 'button'}
                value={props.value || null}
                disabled={false}


            >
                Sign In
            </Styledbutton>


        );

    } else {

        return (
            <>
                <Styledbutton
                    type={props.type || 'button'}
                    value={props.value || null}
                    onClick={props.onClick}
                    disabled={props.disabled || false}

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







// Create component for select input
const Select = props => {


    // Get all options from option prop
    const selectOptions = props.options.split(', ');

    // Generate list of options
    const selectOptionsList = selectOptions.map((selectOption, index) => {
        return <option key={index} value={index}>{selectOption}</option>
    });



    return (
        <fieldset>
            <Label
                hasLabel={props.hasLabel}
                htmlFor={props.htmlFor}
                label={props.label}
            />

            <select
                defaultValue=''
                id={props.htmlFor}
                name={props.name || null}
                required={props.required || null}
            >
                <option value='' disabled>Select one option</option>

                {selectOptionsList}
            </select>
        </fieldset>
    );
};


// Create component for textarea
const Textarea = props => {

    return (
        <fieldset>
            <Label
                hasLabel={props.hasLabel}
                htmlFor={props.htmlFor}
                label={props.label}
            />

            <textarea
                cols={props.cols || null}
                id={props.htmlFor}
                name={props.name || null}
                required={props.required || null}
                rows={props.rows || null}
            >
            </textarea>
        </fieldset>
    );
};

// Create component for checkbox input
const MutiCheckbox = props => {

    return (
        <>
            <label
                htmlFor={props.htmlFor}
                label={props.label}
            >
                <input
                    id={props.htmlFor}
                    name={props.name || null}
                    required={props.required || null}
                    type='checkbox'
                    onChange={props.handleChange}
                    checked={props.checked}
                    value={props.value}
                />
                {props.label}
            </label>
        </>
    );

};