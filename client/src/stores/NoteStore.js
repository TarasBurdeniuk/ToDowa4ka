import {types} from "mobx-state-tree";
import uuid from 'uuid/v4';

const state = {
    list: [
        {
            id: uuid(),
            title: 'Main notes',
            description: 'some description',
        }
    ]
};

/**
 * create model NoteModel
 */
export const NoteModel = types
    .model('NoteModel', {
        id: types.identifier,
        title: types.string,
        description: types.string,
        isCompleted: types.optional(types.boolean, false),
        isFavorite: types.optional(types.boolean, false)
    })
    .actions((store) => ({
        toggleCompleted() {
            store.isCompleted = !store.isCompleted
        },
        toggleFavorite() {
            store.isFavorite = !store.isFavorite
        }
    }));

// const note = NoteModel.create({
//     id: uuid(),
//     title: 'first title',
//     description: 'description first title'
// });

/**
 * create model NoteListModel
 */
export const NoteListModel = types
    .model('NoteListModel', {
        list: types.array(NoteModel),
    })
    .views((store) => ({
        get favoriteList() {
            return store.list.filter(item => item.isFavorite)
        }
    }))
    .actions((store) => ({
        addNote(title, desc) {
            const note = {
                id: uuid(),
                title,
                description: desc,
            }

            store.list.unshift(note);
        }
    }));
