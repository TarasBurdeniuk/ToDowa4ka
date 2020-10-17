import {
	ADD_NOTE,
	DELETE_NOTE,
	GET_NOTES,
	CLEAR_NOTELIST,
} from '../action/types';

const initialState = {
	noteList: [],
};

const noteItems = (state = initialState, action) => {
	switch (action.type) {
		case GET_NOTES:
			return {
				...state, noteList: action.payload,
			};
		case ADD_NOTE:
			return {
				...state, noteList: [{
					_id: action.payload._id,
					title: action.payload.title,
					text: action.payload.text,
					date: action.payload.date,
					user: action.payload.user,
				}, ...state.noteList],
			};
		case DELETE_NOTE:
			return { ...state, noteList: [...state.noteList.filter(item => item._id !== action.payload)] };
		case CLEAR_NOTELIST:
			return {
				...state, noteList: [],
			};
		default:
			return { ...state };
	}
};

export default noteItems;
