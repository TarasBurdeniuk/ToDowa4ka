import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { deleteNote, getNotes } from '../action/note';

import NoteListItem from '../components/NoteListItem';
import '../styles/TodoList.style.scss';

const NoteList = ({ noteList, deleteNote, searchingNote, getNotes }) => {
	useEffect(() => {
		getNotes();
	}, [getNotes]);

	const itemsNoteList = noteList.map(note =>
		<NoteListItem
			key={note._id}
			{...note}
			date={new Date(note.date).toUTCString()}
			removeNote={() => deleteNote(noteList, note._id)}
		/>,
	);

	const searchingNoteItems = searchingNote.map(note =>
		<NoteListItem
			key={note._id}
			{...note}
			date={new Date(note.date).toUTCString()}
			removeNote={() => deleteNote(noteList, note._id)}
		/>);

	return (
		<ul className='TodoList'>
			{searchingNoteItems.length ? searchingNoteItems : itemsNoteList}
		</ul>
	);
};

NoteList.propTypes = {
	noteList: PropTypes.array.isRequired,
	deleteNote: PropTypes.func.isRequired,
	getNotes: PropTypes.func.isRequired,
	searchingNote: PropTypes.array.isRequired,
};

const mapStateToProps = (store) => ({
	noteList: store.noteItems.noteList,
	searchingNote: store.noteItems.searchingNote,
});

const mapDispatchToProps = {
	deleteNote,
	getNotes,
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteList);