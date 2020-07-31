import React, {useState, useEffect} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';
import styled from 'styled-components';



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
const Styledlabel = styled.label`
margin-top: 24px;
margin-bottom: 8px;
  display: block;
  color: black;
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

const initialItem = {
    instructor_id:"",
    type: "",
    class_name: "",
    instructor_username: "",
    class_date: "",
    class_time: "",
    duration: "",
    intensity: "",
    location: "",
    number_of_attendees: "",
    max_class_size: ""
}

const ClassEdit = props => {
const history = useHistory();

const {id} = useParams();
const [classes, setClasses] = useState(initialItem)


useEffect(()=>{
    axiosWithAuth()
    .get(`/api/classes/${id}`)
    .then(res =>{
        console.log(res)
        setClasses(res.data)
    })
    .catch(err =>console.log(err))
}, [])

const deleteHandler = e => {
    e.preventDefault();
    axiosWithAuth()
    .delete(`/api/classes/${id}`)
    .then(()=>{
        history.push('/classList')
    })
    .catch(err=>console.log(err))
}

const editHandler = e => {
    e.preventDefault();
    console.log(classes)
    axiosWithAuth()
    .put(`/api/classes/${id}`, classes)
    .then(()=>{
        history.push('/classList')
    })
    .catch(err=>console.log(err))
}

const handleChange = e =>{
    setClasses({
        ...classes,
        [e.target.name]: e.target.value
    });
}
    return(
        <div>
            <Styledform>
               <Styledlabel>
               Class name
               <input
               name="class_name"
               value={classes.class_name}
               onChange={handleChange}

               />
               </Styledlabel>
               <Styledlabel>
               Instructor name:
               <StyledInput
               name="instructor"
               value={classes.instructor}
               onChange={handleChange}

               />
               </Styledlabel>
              <Styledlabel>
              Class date:
               <StyledInput
               name="class_date"
               value={classes.class_date}
               onChange={handleChange}

               />
               </Styledlabel>
               <Styledlabel>
               Class time:
               <StyledInput
               name="class_time"
               value={classes.class_time}
               onChange={handleChange}

               />
               </Styledlabel>
               <Styledlabel>
               Class Duration:
               <StyledInput
               name="duration"
               value={classes.duration}
               onChange={handleChange}

               />
               </Styledlabel>
               <Styledlabel>
               Class Location:
               <StyledInput
               name="location"
               value={classes.location}
               onChange={handleChange}

               />
               </Styledlabel>
               <Styledlabel>
               Class Intensity:
               <StyledInput
               name="intensity"
               value={classes.intensity}
               onChange={handleChange}

               />
               </Styledlabel>

              <Styledlabel>
              Currently enrolled?
               <StyledInput
               name="number_of_attendees"
               value={classes.number_of_attendees}
               onChange={handleChange}

               />
               </Styledlabel>

                 <Styledlabel>
                 Max class Participants:
               <StyledInput
               name="max_class_size"
               value={classes.max_class_size}
               onChange={handleChange}

               />               
               </Styledlabel>
            <button onClick={editHandler}>edit Class</button>
            <br />
            <br/>
            <button onClick={deleteHandler}> Delete</button>
            
           </Styledform>
        </div>
    )
}
export default ClassEdit;
