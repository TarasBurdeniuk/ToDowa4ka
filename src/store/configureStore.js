import {createStore, applyMiddleware, compose} from "redux";
import {rootReducer} from '../reducers';
import {logger} from 'redux-logger';
import {save} from 'redux-localstorage-simple';

const composeEnhancers = process.env.NODE_ENV !== 'production' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const configureStore = preloadState => (
  createStore(
      rootReducer,
      preloadState,
      composeEnhancers (
          applyMiddleware(save({namespace: 'todo-list'}), logger)
      )
  )
);


const store = configureStore({});

export default store;