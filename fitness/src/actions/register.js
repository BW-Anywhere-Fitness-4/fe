import {REGISTER_START, REGISTER_SUCCESS, REGISTER_ERROR} from './index';
import axiosWithAuth from '../utils/axiosWithAuth'


const register = user => dispatch => {
    dispatch({type: REGISTER_START});
    return axiosWithAuth()
    .post('/register', user)
    .then(res => {
        console.log(res);
    dispatch({type: REGISTER_SUCCESS, payload: res})
    })
    .catch(err =>{
        dispatch({type: REGISTER_ERROR, payload: err})
    })
};

export default register;