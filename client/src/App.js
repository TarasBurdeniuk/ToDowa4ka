import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrimarySearchAppBar from './components/Header';
import Body from './components/Body';
import Landing from './components/Landing';
import Register from './components/Register';
import Login from './components/Login';
import './styles/App.style.scss';
import setAuthToken from './utills/setAuthToken';
import { loadUser } from './action/auth';
import store from './store/configureStore';
import PrivateRoute from './components/PrivateRoute';

if (localStorage.token) {
	setAuthToken(localStorage.token);
}

function App() {
	useEffect(() => {
		store.dispatch(loadUser());
	}, []);

	return (
		<Router>
			<Fragment>
				<PrimarySearchAppBar/>
				<Route exact path='/' component={Landing}/>
				<section className="container">
					<Switch>
						<Route exact path='/register' component={Register}/>
						<Route exact path='/login' component={Login}/>
						<PrivateRoute exact path='/notes' component={Body}/>
					</Switch>
				</section>
			</Fragment>
		</Router>
	);
}

export default App;
