import { types, flow } from 'mobx-state-tree';
import axios from 'axios';
import setAuthToken from '../utills/setAuthToken';

const UserModel = types.model('UserModel', {
  _id: types.optional(types.string, ''),
  name: types.optional(types.string, ''),
  avatar: types.optional(types.string, ''),
  email: types.optional(types.string, ''),
  date: types.optional(types.string, ''),
});

const AuthModel = types
  .model('AuthModel', {
    user: types.optional(UserModel, {}),
    token: types.optional(types.string, ''),
    isAuthenticated: types.optional(types.boolean, false),
    loading: types.optional(types.boolean, false),
  })
  .actions((store) => ({
    loadUser: flow(function* () {
      if (localStorage.token) {
        setAuthToken(localStorage.token);
      }
      store.load();
      try {
        const response = yield axios.get('/api/auth');
        store.user = response.data;
        store.isAuthenticated = true;
        store.loading = false;
      } catch (err) {
        console.error(err.message);
      }
    }),
    register: flow(function* ({ name, email, password }) {
      try {
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        };
        const body = JSON.stringify({ name, email, password });
        const response = yield axios.post('/api/users', body, config);

        localStorage.setItem('token', response.data.token);

        store.isAuthenticated = true;
        store.loading = false;

        store.loadUser();
      } catch (err) {
        console.error(err.message);
        this.logout();
      }
    }),
    login: flow(function* (email, password) {
      try {
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        };
        const body = JSON.stringify({ email, password });
        const res = yield axios.post('/api/auth', body, config);

        localStorage.setItem('token', res.data.token);
        store.isAuthenticated = true;
        store.loading = false;

        store.loadUser();
      } catch (err) {
        console.error(err.message);
      }
    }),
    logout: () => {
      localStorage.removeItem('token');
      store.token = '';
      store.isAuthenticated = false;
      store.loading = false;
      store.user = {};
    },
    load: () => {
      store.loading = true;
    },
  }));

export default AuthModel;
