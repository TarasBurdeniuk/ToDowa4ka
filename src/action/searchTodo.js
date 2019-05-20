export const SEARCH_TODO = 'SEARCH_TODO';

export const searchTodo = (todoLIst, searchingWord) => {
    const newTodoList = todoLIst.filter(item => (item.title === searchingWord) && item.title);
    return {
        type: SEARCH_TODO,
        payload: newTodoList
    }
};