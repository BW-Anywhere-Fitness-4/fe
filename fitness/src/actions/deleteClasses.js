import {DELETE_CLASSES, DELETE_CLASSES_SUCCESS, DELETE_CLASSES_ERROR} from './index';
import axioWithAuth from '../utils/axiosWithAuth';

const deleteClasses = id => dispatch => {
    dispatch({type: DELETE_CLASSES});

    return axioWithAuth()
    .delete(`/classes/${id}`)
    .then(res => {
        console.log(res);
        dispatch({type:DELETE_CLASSES_SUCCESS, payload: res.data})

    })
    .catch(err =>{
        console.log(err)
        dispatch({type:DELETE_CLASSES_ERROR, payload: err})
    })
};

export default deleteClasses;