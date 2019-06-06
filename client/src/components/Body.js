import React from 'react';

import '../styles/Body.style.scss';
import Form from './Form';
import TodoList from './TodoList';


const Body = () =>
	<div className='Body'>
		<div className='Body-formContainer'>
			<Form/>
		</div>
		<div className='Body-listContainer'>
			<TodoList/>
		</div>
	</div>;

export default Body;