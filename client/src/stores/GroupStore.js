import uuid from 'uuid/v4';
import {types} from "mobx-state-tree";
import {NoteModel} from "./NoteStore";

const GroupModel = types
    .model('GroupModel', {
        id: uuid(),
        title: types.string,
        notes: types.array(types.reference(NoteModel)),
    })
    .actions(store => ({
        addNote(note) {
            store.notes.unshift(note)
        }
    }));


export const GroupListModel = types
    .model('GroupListModel', {
        list: types.array(GroupModel)
    })
    .actions(store => ({
        add(title) {
            const group = {
                id: uuid(),
                title,
            }

            store.list.unshift(group);
        }
    }));

// const group = GroupModel.create({
//     id: uuid(),
//     title: 'shipping list',
// })
//
// const groupList = GroupListModel.create({
//     list: [group]
// });