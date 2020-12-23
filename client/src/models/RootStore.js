import React from 'react';
import { types } from 'mobx-state-tree';
import NoteListModel from './NoteStore';
import AuthModel from './AuthModel';

const RootStore = types.model('RootStore', {
  notes: types.optional(NoteListModel, {}),
  auth: types.optional(AuthModel, {}),
});

const initialState = RootStore.create({});

export const rootStore = initialState;

export const RootStoreContext = React.createContext(null);

export function useRootModel() {
  const store = React.useContext(RootStoreContext);
  if (store === null) {
    throw new Error('Store cannot be null, please add a context provider');
  }
  return store;
}
