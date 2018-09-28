import types from './types';
import { API_URI } from '../../constants';

const storeTopStories = (topStories) => ({
    type: types.STORE_TOP_STORIES,
    topStories
});

export const fetchTopStories = (page) => async (dispatch) => {
    const response = await fetch(`${API_URI}/news?page=${page}`);
    const data = await response.json();    
    dispatch(storeTopStories(data));
};


