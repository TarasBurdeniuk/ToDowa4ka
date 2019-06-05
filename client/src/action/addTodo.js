import UUID from 'uuid';

import { ADD_TODO } from './types';

export const addTodo = () => {
	return {
		type: ADD_TODO,
		payload: { id: UUID() },
	};
};