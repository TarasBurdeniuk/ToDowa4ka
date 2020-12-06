import {createAction, handleActions} from "redux-actions";

const userLoaded = createAction('userLoaded');
const registrationSuccess = createAction('registrationSuccess');
const loginSuccess = createAction('loginSuccess');
const authDelete = createAction('authDelete');

const auth = handleActions(
    {
        [userLoaded]: (state, {payload}) => ({
            ...state,
            isAuthenticated: true,
            loading: false,
            user: payload,
        }),

        [registrationSuccess]: (state, {payload}) => {
            localStorage.setItem('token', payload.token);
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false,
            };
        },

        [loginSuccess]: (state, {payload}) => {
            localStorage.setItem('token', payload.token);
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false,
            };
        },

        [authDelete]: (state) => {
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                user: null,
            }
        }
    },
    {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        loading: true,
        user: null,
    }
);

export default auth;