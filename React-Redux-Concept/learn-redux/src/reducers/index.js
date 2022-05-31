//using this file to combine all reducers

import counterReducer from './counter';
import loggedReducer from './isLogged';
import {combineReducers} from 'redux';

//each reducer has it's own state

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer
})


export default  allReducers;