import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addNote } from '../action/note';
import ButtonForm from '../components/ButtonForm';
import '../styles/Form.style.scss';
import { styles } from '../styles/Header.style';
import { withStyles } from '@material-ui/core/styles';
import { useRootModel } from "../models/RootStore";

const Form = () => {
	// const dispatch = useDispatch();
	const { notes: { addNote } } = useRootModel();

	const [formData, setText] = useState({
		text: '',
		title: '',
	});

	const { text, title } = formData;

	const onChange = e => setText({ ...formData, [e.target.name]: e.target.value });

	const handleAddNote = (e) => {
		e.preventDefault();
		if (!title || !text) return;
		addNote(formData);
		setText({ text: '', title: '' });
	};

	return (
		<div className='Form'>
			<form
				onSubmit={(e) => handleAddNote(e)}
			>
				<div className='Form-group'>
					<label
						className='Form-label'
						htmlFor='noteTitle'
					>Title:</label>
					<input
						className='Form-input'
						type='text'
						name='title'
						placeholder='Title'
						id='noteTitle'
						value={title}
						onChange={(e) => onChange(e)}
						maxLength='20'
					/>
				</div>
				<div className='Form-group'>
					<label
						className='Form-label'
						htmlFor='noteText'
					>Text:</label>
					<textarea
						className='Form-input'
						name='text'
						id='noteText'
						placeholder='Text'
						cols='30'
						rows='10'
						value={text}
						onChange={(e) => onChange(e)}
					/>
				</div>
				<ButtonForm type='submit' name='ADD NOTE'/>
			</form>
		</div>
	);
};

export default withStyles(styles)(Form);
