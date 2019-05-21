import React, {Fragment} from 'react';
import PrimarySearchAppBar from '../container/Header';
import Body from './Body';
import '../style/App.style.scss';

function App() {
    return (
        <Fragment>
            <PrimarySearchAppBar/>
            <Body/>
        </Fragment>
    );
}

export default App;
