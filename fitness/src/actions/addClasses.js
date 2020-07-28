import {ADD_CLASSES, ADD_CLASSES_SUCCESS, ADD_CLASSES_ERROR} from './index'
import axiosWithAuth from '../utils/axiosWithAuth'

const addClasses = item => dispatch => {
    dispatch({type:ADD_CLASSES});

    return axiosWithAuth()
    .post('/classes', item)
    .then(res =>{
        console.log(res);
        dispatch({type:ADD_CLASSES_SUCCESS, payload: item});
    })
    .catch(err =>{
        console.log(err);
        dispatch({type:ADD_CLASSES_ERROR, payload: err})
    })
};

export default addClasses;