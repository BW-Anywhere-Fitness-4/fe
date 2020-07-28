import {LOGIN_START, LOGIN_SUCCESS, LOGIN_ERROR} from './index';
import axiosWithAuth from '../utils/axiosWithAuth';

const login = (user, history) => dispatch => {
    dispatch({type: LOGIN_START});
    return axiosWithAuth()
    .post('/login', user)
    .then(res => {
        localStorage.setItem('token', res.data.token);
        

        dispatch({type:LOGIN_SUCCESS, payload: res.data});
        history.push('/home');
    })
    .catch(err => {
        dispatch({type:LOGIN_ERROR, payload: err})
    })
};

export default login;