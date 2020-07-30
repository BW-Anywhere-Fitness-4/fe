import {UPDATE_CLASSES, UPDATE_CLASSES_SUCCESS, UPDATE_CLASSES_ERROR} from './index';
import axiosWithAuth from '../utils/axiosWithAuth';


const updateClasses = item => dispatch => {
    dispatch({type:UPDATE_CLASSES})

    return axiosWithAuth()
    .put(`/classes/${item.id}`, item)
    .then(res =>{
        console.log(res);
        dispatch({type: UPDATE_CLASSES_SUCCESS, payload: item})

    })
    .catch(err => {
        console.log(err);
        dispatch({type:UPDATE_CLASSES_ERROR, payload: err})
    })
}