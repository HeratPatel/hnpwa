import types from './types';
import { API_URI } from '../../constants';
import { errorHandler } from '../../utils/error-handler';

const storeTopStories = (topStories) => ({
    type: types.STORE_TOP_STORIES,
    topStories
});

export const fetchTopStories = (page) => async (dispatch) => {
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


