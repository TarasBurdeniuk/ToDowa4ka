import {
	ADD_TODO,
	DELETE_TODO,
	CHANGE_DESCRIPTION,
	CHANGE_TITLE,
	SEARCH_TODO,
} from '../action/types';

import { load } from 'redux-localstorage-simple';

let TASKS = load({ namespace: 'todo-list' });

if (!TASKS || !TASKS.todoItems) {
	TASKS = {
		todoItems: {
			title: '',
			description: '',
			todoList: [],
			searchingTodo: [],
		},
	};
}

const todoItems = (state = TASKS.todoItems, action) => {
	switch (action.type) {
		case CHANGE_TITLE:
			return { ...state, title: action.payload };
		case CHANGE_DESCRIPTION:
			return { ...state, description: action.payload };
		case ADD_TODO:
			return {
				...state, todoList: [...state.todoList, {
					title: state.title,
					description: state.description,
					id: action.payload.id,
					completed: false,
				}],
				title: '',
				description: '',
			};
		case DELETE_TODO:
			return { ...state, todoList: [...action.payload] };
		case SEARCH_TODO:
			return { ...state, searchingTodo: [...action.payload] };
		default:
			return { ...state };
	}
};

export default todoItems;