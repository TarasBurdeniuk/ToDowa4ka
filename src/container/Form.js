import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { addTodo } from '../action/addTodo';
import { changeDescription } from '../action/changeDescription';
import { changeTitle } from '../action/changeTitle';


import ButtonForm from '../components/ButtonForm';
import '../style/Form.style.scss';

const Form = ({ addTodo, title, description, changeTitle, changeDescription }) => {
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
						maxLength='30'
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
};

const mapStateToProps = (store) => ({
	title: store.todoItems.title,
	description: store.todoItems.description,
});

const mapDispatchToProps = {
	addTodo,
	changeDescription,
	changeTitle,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);