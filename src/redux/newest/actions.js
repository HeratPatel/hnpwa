import types from './types';
import { API_URI } from '../../constants';

const storeNewStories = (newStories) => ({
    type: types.STORE_NEW_STORIES,
    newStories
});

export const fetchNewStories = (page) => async (dispatch) => {
    const response = await fetch(`${API_URI}/newest?page=${page}`);
    const data = await response.json();    
    dispatch(storeNewStories(data));
};