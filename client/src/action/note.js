import UUID from 'uuid';
import {
	ADD_NOTE,
	DELETE_NOTE,
	CHANGE_TITLE,
	CHANGE_TEXT,
	SEARCH_NOTE,
} from './types';

//Add note
export const addNote = () => dispatch => {
	dispatch({
		type: ADD_NOTE,
		payload: { id: UUID() },
	});
};

//Change title
export const changeTitle = (newTitle) => {
	return {
		type: CHANGE_TITLE,
		payload: newTitle,
	};
};

//Change text
export const changeText = (newText) => {
	return {
		type: CHANGE_TEXT,
		payload: newText,
	};
};

//Delete note
export const deleteNote = (list, id) => {
	const newList = list.filter(item => item.id !== id);
	return {
		type: DELETE_NOTE,
		payload: newList,
	};
};

//Search note
export const searchNote = (noteLIst, searchingWord) => {
	const newNoteList = noteLIst.filter(item => {
		const w = item.text.toLowerCase().split(' ');

		return (Object.is(item.title, searchingWord) || w.includes(searchingWord));
	});

	return {
		type: SEARCH_NOTE,
		payload: newNoteList,
	};
};