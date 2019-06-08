import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { deleteNote } from '../action/note';

import NoteListItem from '../components/NoteListItem';
import '../styles/TodoList.style.scss';

const NoteList = ({ noteList, deleteNote, searchingNote }) => {
	const itemsNoteList = noteList.map(item =>
		<NoteListItem
			key={item.id}
			{...item}
			removeNote={() => deleteNote(noteList, item.id)}
		/>);

	const searchingNoteItems = searchingNote.map(item =>
		<NoteListItem
			key={item.id}
			{...item}
			removeNote={() => deleteNote(noteList, item.id)}
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
	searchingNote: PropTypes.array.isRequired,
};

const mapStateToProps = (store) => ({
	noteList: store.noteItems.noteList,
	searchingNote: store.noteItems.searchingNote,
});

const mapDispatchToProps = {
	deleteNote,
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteList);