import {LOGIN_START, LOGIN_SUCCESS, LOGIN_ERROR} from '../actions/index'

const loginState = {
    logging: false,
    token: localStorage.getItem('token'),
    error: ''
}


export const loginReducer = (state = loginState, action) =>{
    switch(action.type) {
        case LOGIN_START:
            return {
                ...state,
                logging: true,
                error: null
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                logging: false,
                error: null
            }
        case LOGIN_ERROR:
            return{
                ...state,
                error: "error"
            }
        default:
            return state;
    }
};
