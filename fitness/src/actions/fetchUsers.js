import {FETCHING_USERS, FETCHING_USERS_SUCCESS, FETCHING_USERS_ERROR} from './index';
import axiosWithAuth from '../utils/axiosWithAuth';

const getUsers = id => dispatch => {
    dispatch({type: FETCHING_USERS});

    return axiosWithAuth()
    .get('/users')
    .then(res => {
        console.log(res);
        dispatch({type: FETCHING_USERS_SUCCESS, payload: res.data.users})
    })
    .catch(err =>{
        console.log(err);
        dispatch({type:FETCHING_USERS_ERROR})
    })
};

export default getUsers;