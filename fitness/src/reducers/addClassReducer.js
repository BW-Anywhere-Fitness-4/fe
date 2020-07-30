import {ADD_CLASSES, ADD_CLASSES_SUCCESS, ADD_CLASSES_ERROR} from '../actions/index'


const addClassState = {
    classList: [],
    addingClass: false,
    error: ''

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
