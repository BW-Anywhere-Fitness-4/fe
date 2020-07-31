import React, { useState, useEffect } from "react";
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
clicksubmit=(id)=>{
this.props.history.push(`/classEdit/${id}`)
}
    render(){
        return(
            <div>
                {this.state.classes.map(classes =>{
                    return(
                        <div key={classes.class_id} onClick={()=>{this.clicksubmit(classes.class_id)}} >
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

/*
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

const ClassList = ({classes, updateClass}) => {
    const [list, setList] = useState(initialItem);
    const [editting, setEditting] = useState(false)
    
   const editList = lists => {
       setEditting(true);
       setList(lists)
   }
const saveEdit = e =>{
    e.preventDefault();
    axiosWithAuth()
    .put(`/api/classes/${id}`, list)
    .then(()=>{
        updateClass([
            ...classes
        ])
        window.location.reload()
    })
    .catch(err=>console.log(err))
}

const deletelist = list => {
    axiosWithAuth()
    .delete(`/api/classes/${list.id}`)
    .then(()=>{
        updateClass([
            ...classes
        ])
        window.location.reload()
    })
}
const changehandle = e =>{
    setList({
        ...list,
        [e.target.name]: e.target.value
    })
}
    return(
        <div>
            <ul>
            {classes.map(list => {
                <li key={list.class_id} onClick={()=>editList(list)}>
                    <span>
                        <span onClick={e=>{
                            e.stopPropagation
                            deletelist(list)
                        }}>
                            x
                        </span>
                        <h4>Class name: {list.class_name}</h4> 
                            <p>Instructor name: {list.instructor}</p>
                            <p>Class date: {list.class_date}</p>
                            <p>Class time: {list.class_time}</p>
                            <p>Class Duration: {list.duration}</p>
                            <p>Class Location: {list.location}</p>
                            <p>Class Intensity: {list.intensity}</p>
                            <p>Currently enrolled in class: {list.number_of_attendees}</p>
                            <p>Max class Participants: {list.max_class_size}</p>

                    </span>
                    {editting && (
                        <form onSubmit={saveEdit}>
                            <p>Edit List</p>
                        </form>
                    )}
                </li>
            })}

</ul>
        </div>
    )
}
*/