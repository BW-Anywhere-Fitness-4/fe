import {
    ADD_CLASSES, ADD_CLASSES_SUCCESS, ADD_CLASSES_ERROR,
    ADD_USER, ADD_USER_ERROR, ADD_USER_SUCCESS,
    DELETE_CLASSES, DELETE_CLASSES_SUCCESS, DELETE_CLASSES_ERROR,
    FETCHING_CLASSES, FETCHING_CLASS_SUCCESS, FETCHING_CLASS_ERROR,
    FETCHING_USERS, FETCHING_USERS_SUCCESS, FETCHING_USERS_ERROR,
    LOGIN_START, LOGIN_SUCCESS, LOGIN_ERROR,
    REGISTER_START, REGISTER_SUCCESS, REGISTER_ERROR,
    UPDATE_CLASSES, UPDATE_CLASSES_SUCCESS, UPDATE_CLASSES_ERROR
} from '../actions/index';

const addClassState = {
    classList: [],
    addingClass: false,
    error: ''

};
const addUserState ={
    user: [],
    addingUser: false,
    error: ''
}
const deleteUserState = {
    classList: [],
    deletingClass: false,
    error: ''
}

const fetchClassesState = {
    classList: [],
    fetchingClassList: false,
    error: ''
}

const fetchUserState = {
    user: [],
    fetchingUser: false,
    error: ''
}
const loginState = {
    logging: false,
    token: localStorage.getItem('token'),
    error: ''
}
const registerState = {
    users: {},
    register: false,
    error: ''
}

const updateState = {
    class: {},
    updateClass: false,
    error: ''
}

export const updateReducer = (state= updateState, action) => {
    switch(action.type){
        case UPDATE_CLASSES:
            return {
                ...state,
                updateClass: true,
                error: null
            }
        case UPDATE_CLASSES_SUCCESS:
            return {
                ...state,
                updateClass: false,
                class: payload
            }
        case UPDATE_CLASSES_ERROR:
            return {
                ...state,
                error: "error"
            }

         default: 
            return state;
    }
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
export const loginReducer = (state = loginState, action) =>{
    switch(action.type) {
        case LOGIN_START:
            return {
                ...state,
                logging: true,
                error: null
            }
        case LOGIN_START:
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
                user: payload
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

export const fetchClassesReducer =(state=fetchClassesState, action) =>{
    switch(action.type) {
        case FETCHING_CLASSES:
            return {
                ...state, 
                fetchingClassList: true,
                error: null
            }
        case FETCHING_CLASS_SUCCESS:
            return {
                ...state,
                fetchingClassList: false,
                classList: action.payload
            }
        case FETCHING_CLASS_ERROR:
            return {
                ...state,
                error: "error"
            }
        default: 
            return state;
    }
};

export const addClassReducer = (state=addClassState, action) => {
    switch(action.type) {
        case ADD_CLASSES:
            return {
                ...state, 
                addingClass: true,
                error: null
            };
        case ADD_CLASSES_SUCCESS:
            return {
                ...state,
                 addingClass: false,
                 classList: action.payload
            };
        case ADD_CLASSES_ERROR:
        return {
            ...state,
            error: "error"
        }
        default: 
        return state;
    }
};


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

export const deleteUserReducer = (state = deleteUserState, action) =>{
    switch(action.type){
        case DELETE_CLASSES:
            return {
                ...state,
                deletingClass: true
            }
        case DELETE_CLASSES_SUCCESS:
            return {
                ...state,
                deletingClass: false,
                classList: state.classList.filter(classes => classes.id !== action.payload)
            }
        default:
            return state;
    }
};