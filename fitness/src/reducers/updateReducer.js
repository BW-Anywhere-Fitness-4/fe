import { UPDATE_CLASSES, UPDATE_CLASSES_SUCCESS, UPDATE_CLASSES_ERROR} from '../actions/index';

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
                class: action.payload
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