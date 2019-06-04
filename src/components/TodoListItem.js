import React from 'react';
import { PropTypes } from 'prop-types';

import classNames from 'classnames';

const TodoListItem = ({ id, title, description, completed, removeTodo }) => {

	const itemClassName = classNames('TodoList-item', {
		'TodoList-item--completed': completed,
	});

	return (
		<li className={itemClassName} id={id}>
			<div className='TodoList-itemBlock'>
				<strong className='TodoList-itemTitle'>{title}</strong>
				<p className='TodoList-itemDescription'>{description}</p>
			</div>

			<button
				className='TodoList-itemButton'
				onClick={removeTodo}
			>Remove
			</button>
		</li>
	);
};

TodoListItem.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	completed: PropTypes.bool.isRequired,
	removeTodo: PropTypes.func.isRequired,
};

export default TodoListItem;