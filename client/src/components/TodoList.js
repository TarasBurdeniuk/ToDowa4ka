import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { deleteTodo } from '../action/deleteTodo';

import TodoListItem from '../components/TodoListItem';
import '../styles/TodoList.style.scss';

const TodoList = ({ todoList, deleteTodo, searchingTodo }) => {
	const itemsTodoList = todoList.map(item =>
		<TodoListItem
			key={item.id}
			{...item}
			removeTodo={() => deleteTodo(todoList, item.id)}
		/>);

	const searchingTodoItems = searchingTodo.map(item =>
		<TodoListItem
			key={item.id}
			{...item}
			removeTodo={() => deleteTodo(todoList, item.id)}
		/>);

	return (
		<ul className='TodoList'>
			{searchingTodoItems.length ? searchingTodoItems : itemsTodoList}
		</ul>
	);
};

TodoList.propTypes = {
	todoList: PropTypes.array.isRequired,
	deleteTodo: PropTypes.func.isRequired,
	searchingTodo: PropTypes.array.isRequired,
};

const mapStateToProps = (store) => ({
	todoList: store.todoItems.todoList,
	searchingTodo: store.todoItems.searchingTodo,
});

const mapDispatchToProps = {
	deleteTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);