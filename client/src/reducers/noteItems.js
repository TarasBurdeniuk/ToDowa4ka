import {
	ADD_NOTE,
	DELETE_NOTE,
	CHANGE_TEXT,
	CHANGE_TITLE,
	SEARCH_NOTE,
} from '../action/types';

const initialState = {
	title: '',
	text: '',
	noteList: [],
	searchingNote: [],
};

const noteItems = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_TITLE:
			return { ...state, title: action.payload };
		case CHANGE_TEXT:
			return { ...state, text: action.payload };
		case ADD_NOTE:
			return {
				...state, noteList: [...state.noteList, {
					title: state.title,
					text: state.text,
					id: action.payload.id,
					completed: false,
				}],
				title: '',
				text: '',
			};
		case DELETE_NOTE:
			return { ...state, noteList: [...action.payload] };
		case SEARCH_NOTE:
			return { ...state, searchingNote: [...action.payload] };
		default:
			return { ...state };
	}
};

export default noteItems;