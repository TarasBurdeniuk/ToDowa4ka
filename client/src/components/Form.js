import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { addTodo } from '../action/addTodo';
import { changeDescription } from '../action/changeDescription';
import { changeTitle } from '../action/changeTitle';
import ButtonForm from '../components/ButtonForm';
import '../styles/Form.style.scss';

import InputBase from '@material-ui/core/InputBase';
import { searchTodo } from '../action/searchTodo';
import { styles } from '../styles/Header.style';
import { withStyles } from '@material-ui/core/styles';

const Form = ({ classes, addTodo, title, description, changeTitle, changeDescription, searchTodo, todoList }) => {
	return (
		<div className='Form'>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					if (!title || !description) return;
					addTodo();
				}}
			>
				<div className='Form-group'>
					<InputBase
						placeholder="Search…"
						classes={{
							root: classes.inputRoot,
							input: classes.inputInput,
						}}
						onChange={(e) => {
							searchTodo(todoList, e.target.value);
						}}
						onBlur={(e) => {
							e.target.value = '';
							searchTodo(todoList, e.target.value);
						}}
					/>
					<label
						className='Form-label'
						htmlFor='todoTitle'
					>Title:</label>
					<input
						className='Form-input'
						type='text'
						name='title'
						placeholder='Title'
						id='todoTitle'
						value={title}
						onChange={(e) => changeTitle(e.target.value)}
						maxLength='20'
					/>
				</div>
				<div className='Form-group'>
					<label
						className='Form-label'
						htmlFor='todoDescription'
					>Description:</label>
					<textarea
						className='Form-input'
						name='description'
						id='todoDescription'
						placeholder='Description'
						cols='30'
						rows='10'
						value={description}
						onChange={(e) => changeDescription(e.target.value)}
					/>
				</div>
				<ButtonForm type='submit' name='ADD TODO'/>
			</form>
		</div>
	);
};

Form.propTypes = {
	addTodo: PropTypes.func.isRequired,
	searchTodo: PropTypes.func.isRequired,
	changeDescription: PropTypes.func.isRequired,
	changeTitle: PropTypes.func.isRequired,
};

const mapStateToProps = (store) => ({
	title: store.todoItems.title,
	description: store.todoItems.description,
	todoList: store.todoItems.todoList,
});

const mapDispatchToProps = {
	addTodo,
	changeDescription,
	changeTitle,
	searchTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Form));