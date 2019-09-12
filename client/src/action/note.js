import axios from 'axios';
import {
	ADD_NOTE,
	DELETE_NOTE,
	GET_NOTES,
} from './types';

//Add note
export const addNote = note => async dispatch => {
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	};

	try {
		const res = await axios.post(`/api/notes`, note, config);
		dispatch({
			type: ADD_NOTE,
			payload: res.data,
		});
	} catch (err) {
		console.error(err.message);
	}
};

//Get notes
export const getNotes = () => async dispatch => {
	try {
		const res = await axios.get('/api/notes');

		dispatch({
			type: GET_NOTES,
			payload: res.data,
		});
	} catch (err) {
		console.error(err.message);
	}
};

//Delete note
export const deleteNote = (list, id) => async dispatch => {
	try {
		await axios.delete(`/api/notes/${id}`);
		const newList = list.filter(note => note._id !== id);

		dispatch({
			type: DELETE_NOTE,
			payload: newList,
		});
	} catch (err) {
		console.error(err.message);
	}
};

//Search note
// export const searchNote = (noteLIst, searchingWord) => dispatch => {
// 	const newNoteList = noteLIst.filter(item => {
// 		const w = item.text.toLowerCase().split(' ');
//
// 		return (Object.is(item.title, searchingWord) || w.includes(searchingWord));
// 	});
//
// 	dispatch({
// 		type: SEARCH_NOTE,
// 		payload: newNoteList,
// 	});
// };