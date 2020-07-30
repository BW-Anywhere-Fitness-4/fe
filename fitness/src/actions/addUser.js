import {ADD_USER, ADD_USER_ERROR, ADD_USER_SUCCESS} from './index'
import axiosWithAuth from '../utils/axiosWithAuth'

const addUser = user => dispatch => {
    dispatch({type: ADD_USER});
    return axiosWithAuth()
    .post('/register', user)
    .then(res => {
        console.log(res);
        dispatch({type:ADD_USER_SUCCESS, payload: user});
    })
    .catch(err =>{
        console.log(err);
        dispatch({type:ADD_USER_ERROR, payload: err})
    })
};

export default addUser;