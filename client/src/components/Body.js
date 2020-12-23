import React from 'react';

import '../styles/Body.style.scss';
import Form from './Form';
import NoteList from './NoteList';

const Body = () => (
  <div className='Body'>
    <div className='Body-formContainer'>
      <Form />
    </div>
    <div className='Body-listContainer'>
      <NoteList />
    </div>
  </div>
);

export default Body;
