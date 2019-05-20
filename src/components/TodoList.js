import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from "react-redux";
import {deleteTodo} from '../action/deleteTodo';

import TodoListItem from './TodoListItem';
import '../style/TodoList.style.scss';

class TodoList extends Component {

    render() {

        const {todoList, deleteTodo, searchingTodo} = this.props;

        const itemsTodoList = todoList.map(item =>
            <TodoListItem
                key={item.id}
                {...item}
                removeTodo={() => deleteTodo(todoList, item.id)}
            />);

        const searchingTodoItems = searchingTodo.map(item =>
            <TodoListItem
                key={item.id}
                {...item}
                removeTodo={() => deleteTodo(todoList, item.id)}
            />);

        return (
            <ul className='TodoList'>
                {searchingTodoItems.length ? searchingTodoItems : itemsTodoList}
            </ul>
        )
    }
}

TodoList.propTypes = {
    todoList: PropTypes.array.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    searchingTodo:PropTypes.array.isRequired
};

const mapStateToProps = (store) => {
    return {
        todoList: store.todoItems.todoList,
        searchingTodo: store.todoItems.searchingTodo
    }
};

const mapDispatchToProps = {
    deleteTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);