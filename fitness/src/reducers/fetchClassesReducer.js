import {FETCHING_CLASSES, FETCHING_CLASS_SUCCESS, FETCHING_CLASS_ERROR} from '../actions/index'





const fetchClassesState = {
    classList: [],
    fetchingClassList: false,
    error: ''
}







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
