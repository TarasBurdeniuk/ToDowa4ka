import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { observer } from 'mobx-react';
import { useRootModel } from '../models/RootStore';

const PrivateRoute = observer(({ component: Component }) => {
  const { auth } = useRootModel();

  const { isAuthenticated, loading } = auth;

  return <Route render={() => (!isAuthenticated && !loading ? <Redirect to='/login' /> : <Component />)} />;
});

export default PrivateRoute;
