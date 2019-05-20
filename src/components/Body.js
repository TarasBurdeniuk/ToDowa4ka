import React from 'react';

import '../style/Body.style.scss'
import Form from "./Form";
import TodoList from "./TodoList";


class Body extends React.Component {

    render() {

        return (
            <div className='Body'>
                <div className='Body-formContainer'>
                    <Form/>
                </div>
                <div className='Body-listContainer'>
                    <TodoList/>
                </div>
            </div>
        )
    }
}

export default Body;