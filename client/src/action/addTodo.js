import UUID from 'uuid';

import { ADD_TODO } from './types';

export const addTodo = () => dispatch => {
	dispatch({
		type: ADD_TODO,
		payload: { id: UUID() },
	});
};