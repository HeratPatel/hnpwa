import types from './types';
import { API_URI } from '../../constants';

const storeShowStories = (showStories) => ({
    type: types.STORE_SHOW_STORIES,
    showStories
});

export const fetchShowStories = (page) => async (dispatch) => {
    const response = await fetch(`${API_URI}/show?page=${page}`);
    const data = await response.json();    
    dispatch(storeShowStories(data));
};