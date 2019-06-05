import { DELETE_TODO } from './types';

export const deleteTodo = (list, id) => {
	const newList = list.filter(item => item.id !== id);
	return {
		type: DELETE_TODO,
		payload: newList,
	};
};