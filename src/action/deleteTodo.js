export const DELETE_TODO = 'DELETE_TODO';

export const deleteTodo = (list, id) => {
	const newList = list.filter(item => item.id !== id);
	return {
		type: DELETE_TODO,
		payload: newList,
	};
};