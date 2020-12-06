import axios from 'axios';
import {getNotes} from './note';
import setAuthToken from '../utills/setAuthToken';

/**
 * Load user
 * @returns {object}
 */
export const loadUser = () => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
    }

    try {
        const res = await axios.get('/api/auth');

        dispatch({
            type: 'userLoaded',
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: 'authError',
        });
    }
};

/**
 * Register new user
 * @param {string} name - the name of new user
 * @param {string} email - the email of new user
 * @param {string} password - the password
 * @returns {object} - new user
 */
export const register = ({name, email, password}) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const body = JSON.stringify({name, email, password});

    try {
        const res = await axios.post('/api/users', body, config);
        dispatch({
            type: 'registrationSuccess',
            payload: res.data,
        });

        dispatch(loadUser());
    } catch (err) {
        const errors = err.response.data.errors;
        console.error(errors);

        dispatch({
            type: 'authDelete',
        });
    }
};

/**
 * Log in
 * @param {string} email
 * @param {string} password
 * @returns {object}
 */
export const login = (email, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const body = JSON.stringify({email, password});

    try {
        const res = await axios.post('/api/auth', body, config);
        dispatch({
            type: 'loginSuccess',
            payload: res.data,
        });

        dispatch(loadUser());
        dispatch(getNotes());
    } catch (err) {
        const errors = err.response.data.errors;
        console.error(errors);

        dispatch({
            type: 'authDelete',
        });
    }
};

/**
 * Log out
 */
export const logout = () => dispatch => {
    dispatch({
        type: 'authDelete',
    });
    dispatch({
        type: 'clearNotes',
    });
};