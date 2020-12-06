import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {deleteNote, getNotes} from '../action/note';

import NoteListItem from '../components/NoteListItem';
import '../styles/TodoList.style.scss';

const NoteList = () => {
    const dispatch = useDispatch();

    const noteList = useSelector(state => state.noteReducer.noteList);

    useEffect(() => {
        dispatch(getNotes());
    }, [dispatch]);

    const removeNote = (id) => {
        dispatch(deleteNote(id))
    };

    const itemsNoteList = noteList.map(note => (
        <NoteListItem
            key={note._id}
            {...note}
            date={new Date(note.date).toUTCString()}
            removeNote={() => removeNote(note._id)}
        />
    ));

    return (
        <ul className='TodoList'>
            {itemsNoteList}
        </ul>
    );
};

export default NoteList;
