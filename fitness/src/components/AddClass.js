import React, {useState} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';


const initialItem = {
    class_id: "",
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

const AddClass = props => {
    const [item, setItem] = useState(initialItem);
    
    const handleChange = e => {
        e.persist();
        setItem({
            ...item,
            [e.target.name]:e.target.value
            });
    }

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
        .post("/api/classes", item)
        .then(res=>{
            console.log(res);
            item(res.data)
        })
        .catch(err =>console.log(err))
    }
    return(
        <form onSubmit={handleSubmit}>
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
            <button>Add Class</button>
            
           </form>

    )
}

export default AddClass;