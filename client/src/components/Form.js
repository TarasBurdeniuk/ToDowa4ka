import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { addNote, searchNote } from '../action/note';
import ButtonForm from '../components/ButtonForm';
import '../styles/Form.style.scss';

import InputBase from '@material-ui/core/InputBase';
import { styles } from '../styles/Header.style';
import { withStyles } from '@material-ui/core/styles';

const Form = ({ classes, addNote, searchNote, noteList }) => {

	const [formData, setText] = useState({
		text: '',
		title: '',
	});

	const { text, title } = formData;

	const onChange = e => setText({ ...formData, [e.target.name]: e.target.value });

	return (
		<div className='Form'>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					if (!title || !text) return;
					addNote(formData);
					setText({ text: '', title: '' });
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
							searchNote(noteList, e.target.value);
						}}
						onBlur={(e) => {
							e.target.value = '';
							searchNote(noteList, e.target.value);
						}}
					/>
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

Form.propTypes = {
	addNote: PropTypes.func.isRequired,
	searchNote: PropTypes.func.isRequired,
};

const mapStateToProps = (store) => ({
	title: store.noteItems.title,
	text: store.noteItems.text,
	noteList: store.noteItems.noteList,
});

const mapDispatchToProps = {
	addNote,
	searchNote,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Form));