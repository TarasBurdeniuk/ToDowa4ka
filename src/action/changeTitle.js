export const CHANGE_TITLE = 'CHANGE_TITLE';

export const changeTitle =(newTitle) => {
    return{
        type: CHANGE_TITLE,
        payload: newTitle
    }
};