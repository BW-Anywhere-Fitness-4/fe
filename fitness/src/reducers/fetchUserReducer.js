import {FETCHING_USERS, FETCHING_USERS_SUCCESS, FETCHING_USERS_ERROR} from '../actions/index'


const fetchUserState = {
    user: [],
    fetchingUser: false,
    error: ''
}



export const fetchUserReducer =(state=fetchUserState, action)=>{
    switch(action.type) {
        case FETCHING_USERS:
            return {
                ...state,
                fetchingUser: true,
                error: null
            }
        case FETCHING_USERS_SUCCESS:
            return {
                ...state,
                fetchingUser: false,
                user: action.payload
            }
        case FETCHING_USERS_ERROR:
            return {
                ...state,
                error: "error"
            }
            default:
                return state;
    }
};