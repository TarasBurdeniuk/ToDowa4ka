import {types, clone} from "mobx-state-tree";
import {autorun} from "mobx";
import {NoteListModel} from "./NoteStore";
import {GroupListModel} from "./GroupStore";
import print from "../utills/print";

const RootStore = types.model('RootStore', {
    notes: types.optional(NoteListModel, {}),
    groups: types.optional(GroupListModel, {}),
});

const rootStore = RootStore.create({});

// autorun(() => print('root store:', rootStore));


rootStore.notes.addNote('note 1', 'description 1');
rootStore.notes.addNote('note 2', 'description 2');

const note = rootStore.notes.list[0];

rootStore.groups.add('group 1');

const group = rootStore.groups.list[0];

group.addNote(note);

note.toggleCompleted();

export default rootStore;