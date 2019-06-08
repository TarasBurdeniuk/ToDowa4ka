import { combineReducers } from 'redux';
import noteItems from './noteItems';
import auth from './auth';

export const rootReducer = combineReducers({
	noteItems,
	auth
});