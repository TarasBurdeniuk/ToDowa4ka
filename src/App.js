import React, { Fragment } from 'react';
import PrimarySearchAppBar from './components/Header';
import Body from './components/Body';
import './style/App.style.scss';

function App() {
	return (
		<Fragment>
			<PrimarySearchAppBar/>
			<Body/>
		</Fragment>
	);
}

export default App;
