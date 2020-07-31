import {addClassReducer} from './addClassReducer';
import {addUserReducer} from './addUserReducer';
import {deleteClassReducer} from './deleteClassReducer';
import {fetchClassesReducer} from './fetchClassesReducer';
import {fetchUserReducer} from './fetchUserReducer';
import {loginReducer} from './loginReducer';
import {registerReducer} from './registerReducer';
import {updateReducer} from './updateReducer';

import {combineReducers} from 'redux';



export default combineReducers({
    addClassReducer,
    loginReducer
});


