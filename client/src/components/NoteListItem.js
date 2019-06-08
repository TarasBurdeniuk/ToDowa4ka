import React from 'react';
import { PropTypes } from 'prop-types';

import classNames from 'classnames';

const NoteListItem = ({ id, title, text, completed, removeNote }) => {

	const itemClassName = classNames('TodoList-item', {
		'TodoList-item--completed': completed,
	});

	return (
		<li className={itemClassName} id={id}>
			<div className='TodoList-itemBlock'>
				<strong className='TodoList-itemTitle'>{title}</strong>
				<button
					className='TodoList-itemButton'
					onClick={removeNote}
				>Remove
				</button>
			</div>
			<p className='TodoList-itemDescription'>{text}</p>
		</li>
	);
};

NoteListItem.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	completed: PropTypes.bool.isRequired,
	removeNote: PropTypes.func.isRequired,
};

export default NoteListItem;