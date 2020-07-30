import React, { ReactDOM, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";


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
    `


const StyledInput = styled.input`

padding: 8px;
width: 80 %;
border - top: 0;
border - right: 0;
border - bottom: 1px solid #bdc3c7;
border - left: 0;
transition: border - bottom - color .15s ease -in;
`;



const InstructorConfirmation = props => {

    const [instData, setInstData] = useState(
        {
            email: 'YES!!!!!!',
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
                EarlyMorning: false,
                LateMorning: false,
                EarlyAfternoon: false,
                LateAfternoon: false,
                EarlyEvening: false,
                LateEvening: false
            },
            terms: ''
        }
    )


    useEffect(() => {
        setInstData(props.instructorData)

    }, [props.instructorData])


    return (
        <>

            <h1>Please Confirm Your Account Details</h1>
            <Styledform>
                <h3>Email:</h3>
                <h2>{instData.email}</h2>
                <h3>Specialty:</h3>
                <h2>{instData.Specialty}</h2>

                <h3>Phone Number:</h3>
                <h2>{instData.phoneNumber}</h2>
                <h3>Days Available:</h3>



                {
                    instData.daysAvailable
                        ?
                        Object.values(instData.daysAvailable).map(
                            (value, index) => {
                                if (value === true) {

                                    return <h2>{Object.keys(instData.daysAvailable)[index]}</h2>;
                                }
                            })
                        : ''
                }

                <h3>Times Available:</h3>
                {instData.TimesofDayAvailable.EarlyMorning ? <h2>Early Morning</h2> : ''}
                {instData.TimesofDayAvailable.LateMorning ? <h2>Late Morning</h2> : ''}
                {instData.TimesofDayAvailable.EarlyAfternoon ? <h2>Early Afternoon</h2> : ''}
                {instData.TimesofDayAvailable.LateAfternoon ? <h2>Late Afternoon</h2> : ''}
                {instData.TimesofDayAvailable.EarlyEvening ? <h2>Early Evening</h2> : ''}
                {instData.TimesofDayAvailable.LateEvening ? <h2>Late Evening</h2> : ''}

                <Link to="/instructorSignUp">
                    <Button
                        value='submit'
                        text='Sign In'
                        link={true}
                        disabled={false}
                    />
                </Link>

            </Styledform>

        </>

    )


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
                Change info
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



export default InstructorConfirmation;
