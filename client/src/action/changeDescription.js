import { CHANGE_DESCRIPTION } from './types';

export const changeDescription = (newDescription) => {
	return {
		type: CHANGE_DESCRIPTION,
		payload: newDescription,
	};
};