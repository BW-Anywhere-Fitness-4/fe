import React, {useState, useEffect} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';

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
            <form>
               <label>
               Class name
               <input
               name="class_name"
               value={classes.class_name}
               onChange={handleChange}

               />
               </label>
               <label>
               Instructor name:
               <input
               name="instructor"
               value={classes.instructor}
               onChange={handleChange}

               />
               </label>
              <label>
              Class date:
               <input
               name="class_date"
               value={classes.class_date}
               onChange={handleChange}

               />
               </label>
               <label>
               Class time:
               <input
               name="class_time"
               value={classes.class_time}
               onChange={handleChange}

               />
               </label>
               <label>
               Class Duration:
               <input
               name="duration"
               value={classes.duration}
               onChange={handleChange}

               />
               </label>
               <label>
               Class Location:
               <input
               name="location"
               value={classes.location}
               onChange={handleChange}

               />
               </label>
               <label>
               Class Intensity:
               <input
               name="intensity"
               value={classes.intensity}
               onChange={handleChange}

               />
               </label>

              <label>
              Currently enrolled?
               <input
               name="number_of_attendees"
               value={classes.number_of_attendees}
               onChange={handleChange}

               />
               </label>

                 <label>
                 Max class Participants:
               <input
               name="max_class_size"
               value={classes.max_class_size}
               onChange={handleChange}

               />               
               </label>
            <button onClick={editHandler}>edit Class</button>
            <br />
            <br/>
            <button onClick={deleteHandler}> Delete</button>
            
           </form>
        </div>
    )
}
export default ClassEdit;