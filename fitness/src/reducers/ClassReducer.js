import {
    ADD_CLASS,
    ADDED, 
 EDIT_CLASS, 
 EDITTING_SUCCESS, 
 DELETE_CLASS,
 FETCHING_CLASSES,
 FETCHING_SUCCESS 
} from '../actions/ClassActions';

const initialState = {
    isfetching:false,
    class:[{}],
  };

export const Reducer = (state=initialState, action)=>{
    switch(action.type){
        case FETCHING_CLASSES:
            return {
                ...state,
                isfetching: true
            }
        case FETCHING_SUCCESS:
            return {
                ...state,
                isfetching: false,
                class: action.payload
            }

    }
}