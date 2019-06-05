import { CHANGE_TITLE } from './types';

export const changeTitle = (newTitle) => {
	return {
		type: CHANGE_TITLE,
		payload: newTitle,
	};
};