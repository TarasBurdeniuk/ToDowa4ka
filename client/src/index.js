import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { rootStore, RootStoreContext } from './models/RootStore';

ReactDOM.render(
  <RootStoreContext.Provider value={rootStore}>
    <App />
  </RootStoreContext.Provider>,
  document.getElementById('root'),
);
