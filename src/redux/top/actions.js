import types from './types';
import { API_URI } from '../../constants';

const storeTopStories = (topStories) => ({
    type: types.STORE_TOP_STORIES,
    topStories
});

export const fetchTopStories = (page) => async (dispatch, getState, errorHandler) => {
    try {
        const response = await fetch(`${API_URI}/news?page=${page}`);
        const data = await response.json();         
        if(data.error){            
            errorHandler(dispatch, data.error);
        }
        else{
            dispatch(storeTopStories(data));
        }   
    } catch (error) {
        errorHandler(dispatch, 'Error in fetch top stories.');
    }    
};


