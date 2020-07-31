import React, {useState} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import {useHistory} from  'react-router-dom';
import addClasses from '../actions/addClasses'
import { connect } from 'react-redux';
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
    const history =useHistory();

    const handleChange = e => {
        
        setItem({
            ...item,
            [e.target.name]:e.target.value
            });
    }

    const handleSubmit = e => {
        e.preventDefault();
      props.addClasses(item);
      history.push('/classList')
      
    }
    return(
        <Styledform onSubmit={handleSubmit}>
               <Styledlabel>
               Class name
               <StyledInput
               name="class_name"
               value={item.class_name}
               onChange={handleChange}

               />
               </Styledlabel>
               <Styledlabel>
               Instructor name:
               <StyledInput
               name="instructor"
               value={item.instructor}
               onChange={handleChange}

               />
               </Styledlabel>
              <Styledlabel>
              Class date:
               <StyledInput
               name="class_date"
               value={item.class_date}
               onChange={handleChange}

               />
               </Styledlabel>
               <Styledlabel>
               Class time:
               <StyledInput
               name="class_time"
               value={item.class_time}
               onChange={handleChange}

               />
               </Styledlabel>
               <Styledlabel>
               Class Duration:
               <StyledInput
               name="duration"
               value={item.duration}
               onChange={handleChange}

               />
               </Styledlabel>
               <Styledlabel>
               Class Location:
               <StyledInput
               name="location"
               value={item.location}
               onChange={handleChange}

               />
               </Styledlabel>
               <Styledlabel>
               Class Intensity:
               <StyledInput
               name="intensity"
               value={item.intensity}
               onChange={handleChange}

               />
               </Styledlabel>

              <Styledlabel>
              Currently enrolled?
               <StyledInput
               name="number_of_attendees"
               value={item.number_of_attendees}
               onChange={handleChange}

               />
               </Styledlabel>

                 <Styledlabel>
                 Max class Participants:
               <StyledInput
               name="max_class_size"
               value={item.max_class_size}
               onChange={handleChange}

               />               
               </Styledlabel>
            <button>Add Class</button>
            
           </Styledform>

    )
}
const mapStateToProps = state =>{
    return state;
}
export default connect(mapStateToProps, {addClasses})(AddClass);