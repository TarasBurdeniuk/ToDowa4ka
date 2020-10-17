import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteNote, getNotes } from '../action/note';

import NoteListItem from '../components/NoteListItem';
import '../styles/TodoList.style.scss';

const NoteList = () => {
	console.log('NoteList render');
	const dispatch = useDispatch();

	const noteList = useSelector(state => state.noteItems.noteList);

	useEffect(() => {
		dispatch(getNotes());
	}, [dispatch]);



	const itemsNoteList = noteList.map(note => {
		console.log('render item note');
		return <NoteListItem
			key={note._id}
			{...note}
			date={new Date(note.date).toUTCString()}
			removeNote={() => dispatch(deleteNote(note._id))}
		/>
	});

	return (
		<ul className='TodoList'>
			{itemsNoteList}
		</ul>
	);
};

export default NoteList;
