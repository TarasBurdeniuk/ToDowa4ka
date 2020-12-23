import { types, flow } from 'mobx-state-tree';
import axios from 'axios';

/**
 * Note model
 */
const NoteModel = types.model('NoteModel', {
  _id: types.string,
  title: types.string,
  text: types.string,
  user: types.string,
  date: types.string,
});

/**
 * create model NoteListModel
 */
const NoteListModel = types
  .model('NoteListModel', {
    noteList: types.array(NoteModel),
    isLoading: types.optional(types.boolean, false),
  })
  .actions((store) => ({
    getNotes: flow(function* () {
      try {
        const response = yield axios.get('/api/notes');
        store.noteList = response.data;
        store.isLoading = false;
      } catch (err) {
        console.warn(err.message);
      }
    }),
    deleteNote: flow(function* (id) {
      try {
        yield axios.delete(`/api/notes/${id}`);
        store.noteList = store.noteList.filter((item) => item._id !== id);
      } catch (err) {
        console.error(err.message);
      }
    }),
    addNote: flow(function* (note) {
      try {
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        };
        const response = yield axios.post(`/api/notes`, note, config);
        store.noteList = [response.data, ...store.noteList];
      } catch (err) {
        console.error(err.message);
      }
    }),
    load: () => {
      store.isLoading = true;
    },
  }));

export default NoteListModel;
