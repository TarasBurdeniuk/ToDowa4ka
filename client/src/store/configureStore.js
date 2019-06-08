import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from '../reducers';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';

const middleWare = [thunk, logger];

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(...middleWare)),
);

export default store;