import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { deleteNote, getNotes } from '../action/note';

import NoteListItem from '../components/NoteListItem';
import '../styles/TodoList.style.scss';

const NoteList = ({ noteList, deleteNote, getNotes }) => {
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

	return (
		<ul className='TodoList'>
			{itemsNoteList}
		</ul>
	);
};

NoteList.propTypes = {
	noteList: PropTypes.array.isRequired,
	deleteNote: PropTypes.func.isRequired,
	getNotes: PropTypes.func.isRequired,
};

const mapStateToProps = (store) => ({
	noteList: store.noteItems.noteList,
});

const mapDispatchToProps = {
	deleteNote,
	getNotes,
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteList);