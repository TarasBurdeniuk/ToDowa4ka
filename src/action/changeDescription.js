export const CHANGE_DESCRIPTION = 'CHANGE_DESCRIPTION';

export const changeDescription = (newDescription) => {
    return {
        type: CHANGE_DESCRIPTION,
        payload: newDescription
    }
};