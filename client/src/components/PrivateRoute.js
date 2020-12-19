import React from 'react';
import {Route, Redirect} from 'react-router-dom';
// import {useSelector} from 'react-redux';

import {observer} from "mobx-react";
import {useRootModel} from "../models/RootStore";

const PrivateRoute = observer(({component: Component, ...rest}) => {
    // const auth = useSelector(state => state.auth);
    const {auth} = useRootModel();

    const {isAuthenticated, loading} = auth;

    return (
        <Route
            {...rest}
            render={props => !isAuthenticated && !loading ? (<Redirect to='/login'/>) : (
                <Component{...props}/>
            )}/>
    );
});

export default PrivateRoute;
