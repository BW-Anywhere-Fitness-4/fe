import {ADD_USER, ADD_USER_ERROR, ADD_USER_SUCCESS} from '../actions/index'


const addUserState ={
    user: [],
    addingUser: false,
    error: ''
}

export const addUserReducer = (state = addUserState, action) => {
    switch(action.type) {
        case ADD_USER:
            return {
                ...state,
                addingUser: true,
                error: null
            }
        case ADD_USER_SUCCESS:
            return {
                ...state,
                addingUser: false,
                user: action.payload
            }
        case ADD_USER_ERROR:
            return {
                ...state,
                error: "error"
            }
            default:
                return state;
    }
};
