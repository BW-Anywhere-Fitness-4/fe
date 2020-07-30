import {REGISTER_START, REGISTER_SUCCESS, REGISTER_ERROR} from '../actions/index';


const registerState = {
    users: {},
    register: false,
    error: ''
}

export const registerReducer = (state = registerState, action) => {
    switch(action.type) {
        case REGISTER_START:
            return {
                ...state, 
                register: true,
                error: null
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                register: false,
                users: action.payload,
                error: null
            }
        case REGISTER_ERROR:
            return {
                ...state,
                error: "error"
            }

            default:
                return state;
    }
}