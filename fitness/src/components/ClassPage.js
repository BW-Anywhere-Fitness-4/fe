import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import classList from './ClassList'

const ClassPage = () => {
    const [classList, setClassList] = useState([]);

    useEffect(()=>{
        axiosWithAuth()
        .get("/api/classes")
        .then(res =>{
            console.log(res.data)
            setClassList(res.data)
        })
        .catch(err =>console.log(err))
    }, [setClassList])

    return(
        <>
<ClassList classes={classList} updateClass={setClassList}/>
        </>
    )
}
export default ClassPage;