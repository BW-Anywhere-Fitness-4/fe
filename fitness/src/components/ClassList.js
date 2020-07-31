import React, { useState } from "react";
import axios from "axios";
import  axiosWithAuth  from '../utils/axiosWithAuth'
import AddClass from './AddClass'
import {useHistory} from 'react-router-dom'


class ClassList extends React.Component {
    
    state = {
        classes: []
    }

    
componentDidMount(){
    this.getData();
}

getData=()=>{
axiosWithAuth()
.get("/api/classes")
.then(res =>{
    console.log(res);
    this.setState({
        classes: res.data
    })
})
.catch(err=>console.log(err))
}
    render(){
        return(
            <div>
                {this.state.classes.map(classes =>{
                    return(
                        <div key={classes.class_id} >
                            <h4>Class name: {classes.class_name}</h4> 
                            <p>Instructor name: {classes.instructor}</p>
                            <p>Class date: {classes.class_date}</p>
                            <p>Class time: {classes.class_time}</p>
                            <p>Class Duration: {classes.duration}</p>
                            <p>Class Location: {classes.location}</p>
                            <p>Class Intensity: {classes.intensity}</p>
                            <p>Currently enrolled in class: {classes.number_of_attendees}</p>
                            <p>Max class Participants: {classes.max_class_size}</p>

                        </div>
                    )
                })}
                
            </div>
        )
    }
}

export default ClassList;

