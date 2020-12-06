import axios from 'axios';

/**
 * Add new note
 * @param {object} note
 * @returns {object}
 */
export const addNote = note => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    try {
        const res = await axios.post(`/api/notes`, note, config);
        dispatch({type: 'addNote', payload: res.data})
    } catch (err) {
        console.error(err.message);
    }
};

/**
 * Get all notes
 * @returns list of notes
 */
export const getNotes = () => async dispatch => {
    try {
        const res = await axios.get('/api/notes');

        dispatch({type: 'getNotes', payload: res.data});
    } catch (err) {
        console.error(err.message);
    }
};

/**
 * Delete note
 * @param {number} id
 */
export const deleteNote = (id) => async dispatch => {
    try {
        await axios.delete(`/api/notes/${id}`);

        dispatch({type: 'deleteNote', payload: id});
    } catch (err) {
        console.error(err.message);
    }
};
