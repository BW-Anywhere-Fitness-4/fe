import {DELETE_CLASSES, DELETE_CLASSES_SUCCESS, DELETE_CLASSES_ERROR} from '../actions/index';

const deleteClassState = {
    classList: [],
    deletingClass: false,
    error: ''
}

export const deleteClassReducer = (state = deleteClassState, action) =>{
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