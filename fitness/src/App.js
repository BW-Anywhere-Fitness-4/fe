import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";
import InstructorSignUp from './components/instructorSignUp';
import InstructorSignIn from './components/instructorSignIn';
import InstructorConfirmation from './components/instructorConfirmation';
import { Route, Switch } from "react-router-dom";
function App() {

  const [dataPic, setdataPic] = useState({ img: '' });
  const [instructorData, setInstructorData] = useState(
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
        EarlyMorning: false,
        LateMorning: false,
        EarlyAfternoon: false,
        LateAfternoon: false,
        EarlyEvening: false,
        LateEvening: false
      },
      terms: ''

    });


  const instructorDataSetup = (Data) => {


    setInstructorData({

      ...instructorData,
      email: Data.email,
      password: Data.password,
      verifyPW: Data.verifyPW,
      Specialty: Data.Specialty,
      phoneNumber: Data.phoneNumber,
      daysAvailable: Data.daysAvailable,
      TimesofDayAvailable: Data.TimesofDayAvailable,
      terms: Data.terms

    });

  }

  useEffect(() => {

    axios.get("https://api.unsplash.com/photos/random?client_id=uSU0O0qzwu23MITwAOwk2HsnTU-62R4sN7_oKX0nFEg")
      .then(res => {

        console.log('res', res.data.urls.regular);
        setdataPic({
          ...dataPic,
          img: res.data.urls.regular
        });



      })

  }, [])

  useEffect(() => {
    console.log('dataPic', dataPic)
  }, [dataPic])

  return (


    <div className="App">

      <Switch>

        <Route path="/instructorSignUp">
          <InstructorSignUp instructorDataSetup={instructorDataSetup} dataPic={dataPic} />
        </Route>

        <Route path="/instructorSignIn" >
          <InstructorSignIn instructorDataSetup={instructorDataSetup} dataPic={dataPic} />
        </Route>

        <Route path="/instructorConfirmation" >

          <InstructorConfirmation instructorData={instructorData} dataPic={dataPic} />
        </Route>

      </Switch>
    </div>


  );
}

export default App;


