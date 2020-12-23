import React from 'react';
import { PropTypes } from 'prop-types';
import moment from 'moment';

const NoteListItem = ({ title, text, removeNote, date }) => {
  return (
    <li className='TodoList-item'>
      <div className='TodoList-itemBlock'>
        <strong className='TodoList-itemTitle'>{title}</strong>
        <button type='button' className='TodoList-itemButton' onClick={removeNote}>
          Remove
        </button>
      </div>
      <p className='TodoList-itemDescription'>{text}</p>
      <span className='TodoList-itemDate'>{moment(date).format('MMMM Do YYYY, HH:mm:ss')}</span>
    </li>
  );
};

NoteListItem.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  removeNote: PropTypes.func.isRequired,
  date: PropTypes.string.isRequired,
};

export default NoteListItem;
