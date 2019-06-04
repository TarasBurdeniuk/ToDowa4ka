import React from 'react';

import '../style/Body.style.scss';
import Form from '../container/Form';
import TodoList from '../container/TodoList';


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