import types from './types';
import { API_URI } from '../../constants';

const storeAskStories = (askStories) => ({
    type: types.STORE_ASK_STORIES,
    askStories
});

export const fetchAskStories = (page) => async (dispatch) => {
    const response = await fetch(`${API_URI}/ask?page=${page}`);
    const data = await response.json();    
    dispatch(storeAskStories(data));
};