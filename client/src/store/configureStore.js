import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from '../reducers';
import { logger } from 'redux-logger';
import { save } from 'redux-localstorage-simple';
import thunk from 'redux-thunk';

const middleWare = [thunk, logger, save({ namespace: 'todo-list' })];

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(...middleWare)),
);

export default store;