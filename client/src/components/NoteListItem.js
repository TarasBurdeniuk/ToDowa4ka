import React from 'react';
import { PropTypes } from 'prop-types';

const NoteListItem = ({ title, text, removeNote, date }) => {

	return (
		<li className='TodoList-item'>
			<div className='TodoList-itemBlock'>
				<strong className='TodoList-itemTitle'>{title}</strong>
				<button
					className='TodoList-itemButton'
					onClick={removeNote}
				>Remove
				</button>
			</div>
			<p className='TodoList-itemDescription'>{text}</p>
			<span className='TodoList-itemDate'>{date}</span>
		</li>
	);
};

NoteListItem.propTypes = {
	title: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	removeNote: PropTypes.func.isRequired,
};

export default NoteListItem;