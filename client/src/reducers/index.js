import {combineReducers} from 'redux';
import noteReducer from './noteItems';
import auth from './auth';

export const rootReducer = combineReducers({
    noteReducer,
    auth
});