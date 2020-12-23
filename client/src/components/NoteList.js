import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { useRootModel } from '../models/RootStore';
import NoteListItem from './NoteListItem';
import '../styles/TodoList.style.scss';

const NoteList = observer(() => {
  const {
    notes: { getNotes, deleteNote, noteList, load, isLoading },
  } = useRootModel();

  useEffect(() => {
    load();
    getNotes();
  }, [load, getNotes]);

  if (isLoading) {
    return <div className='Loader'>Loading...</div>;
  }

  const removeNote = (id) => {
    deleteNote(id);
  };

  const itemsNoteList = noteList.map((note) => (
    <NoteListItem
      key={note._id}
      text={note.text}
      title={note.title}
      date={new Date(note.date).toUTCString()}
      removeNote={() => removeNote(note._id)}
    />
  ));

  return <ul className='TodoList'>{itemsNoteList}</ul>;
});

export default NoteList;
