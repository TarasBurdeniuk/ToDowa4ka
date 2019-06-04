export const SEARCH_TODO = 'SEARCH_TODO';

export const searchTodo = (todoLIst, searchingWord) => {
	const newTodoList = todoLIst.filter(item => {
		const w = item.description.toLowerCase().split(' ');

		return (Object.is(item.title, searchingWord) || w.includes(searchingWord));
	});

	return {
		type: SEARCH_TODO,
		payload: newTodoList,
	};
};