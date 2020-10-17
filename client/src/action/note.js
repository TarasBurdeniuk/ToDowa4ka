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
export const deleteNote = (id) => async dispatch => {
	try {
		await axios.delete(`/api/notes/${id}`);

		dispatch({
			type: DELETE_NOTE,
			payload: id,
		});
	} catch (err) {
		console.error(err.message);
	}
};
