import React, {useState, useEffect} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';

const initialItem = {
    class_name: "",
    instructor: "",
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
    .get(`/api/classes/${props.id}`)
    .then(res =>{
        setClasses(res.data)
    })
    .catch(err =>console.log(err))
}, [])

const deleteHandler = e => {
    e.preventDefault();
    axiosWithAuth()
    .delete(`/api/classes/${props.id}`)
    .then(()=>{
        history.push('/classList')
    })
    .catch(err=>console.log(err))
}

const editHandler = e => {
    e.preventDefault();
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
        [event.target.name]: event.target.value
    });
}
    return(
        <div>
            <form>
               <label>
               Class name
               <input
               name="class_name"
               value={item.class_name}
               onChange={handleChange}

               />
               </label>
               <label>
               Instructor name:
               <input
               name="instructor"
               value={item.instructor}
               onChange={handleChange}

               />
               </label>
              <label>
              Class date:
               <input
               name="class_date"
               value={item.class_date}
               onChange={handleChange}

               />
               </label>
               <label>
               Class time:
               <input
               name="class_time"
               value={item.class_time}
               onChange={handleChange}

               />
               </label>
               <label>
               Class Duration:
               <input
               name="duration"
               value={item.duration}
               onChange={handleChange}

               />
               </label>
               <label>
               Class Location:
               <input
               name="location"
               value={item.location}
               onChange={handleChange}

               />
               </label>
               <label>
               Class Intensity:
               <input
               name="intensity"
               value={item.intensity}
               onChange={handleChange}

               />
               </label>

              <label>
              Currently enrolled?
               <input
               name="number_of_attendees"
               value={item.number_of_attendees}
               onChange={handleChange}

               />
               </label>

                 <label>
                 Max class Participants:
               <input
               name="max_class_size"
               value={item.max_class_size}
               onChange={handleChange}

               />               
               </label>
            <button onClick={editHandler}>edit Class</button>
            <br />
            <br/>
            <button onClick={handleDelete}> Delete</button>
            
           </form>
        </div>
    )
}