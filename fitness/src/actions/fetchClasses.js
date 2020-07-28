import {FETCHING_CLASSES, FETCHING_CLASS_SUCCESS, FETCHING_CLASS_ERROR} from './index'
import axiosWithAuth from '../utils/axiosWithAuth';


const getClasses = id => dispatch => {
    dispatch({type:FETCHING_CLASSES});

    return axiosWithAuth()
    .get('/classes')
    .then(res => {
        console.log(res.data.classes);
        dispatch({type: FETCHING_CLASS_SUCCESS, payload: res.data.classes})
    })
    .catch(err => {
        console.log(err);
        dispatch({type:FETCHING_CLASS_ERROR, payload: err})
    });
};

export default getClasses;