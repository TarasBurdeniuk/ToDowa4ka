import {createAction, handleActions} from "redux-actions";

const addNote = createAction('addNote');
const getNotes = createAction('getNotes');
const deleteNote = createAction('deleteNote');
const clearNotes = createAction('clearNotes');

const noteReducer = handleActions(
    {
        [addNote]: (state, {payload}) => ({
            ...state,
            noteList: [payload, ...state.noteList]
        }),
        [getNotes]: (state, {payload}) => ({
            ...state,
            noteList: payload,
        }),
        [deleteNote]: (state, {payload}) => ({
            ...state,
            noteList: state.noteList.filter(item => item._id !== payload)
        }),
        [clearNotes]: (state) => ({
            ...state,
            noteList: [],
        })
    },
    {
        noteList: [],
    }
);

export default noteReducer;
