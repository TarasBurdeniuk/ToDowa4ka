import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrimarySearchAppBar from './components/Header';
import Body from './components/Body';
import Landing from './components/Landing';
import Register from './components/Register';
import Login from './components/Login';
import './styles/App.style.scss';

function App() {
	return (
		<Router>
			<Fragment>
				<PrimarySearchAppBar/>
				<Route exact path='/' component={Landing}/>
				<section className="container">
					<Switch>
						<Route exact path='/register' component={Register}/>
						<Route exact path='/login' component={Login}/>
						<Route exact path='/notes' component={Body}/>
					</Switch>
				</section>
			</Fragment>
		</Router>
	);
}

export default App;
