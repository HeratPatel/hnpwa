import types from './types';
import { API_URI } from '../../constants';
import { errorHandler } from '../../utils/error-handler';

const storeShowStories = (showStories) => ({
    type: types.STORE_SHOW_STORIES,
    showStories
});

export const fetchShowStories = (page) => async (dispatch) => {
    try {
        const response = await fetch(`${API_URI}/show?page=${page}`);
        const data = await response.json();
        if(data.error){            
            errorHandler(dispatch, data.error);
        }
        else{
            dispatch(storeShowStories(data));
        }  
    } catch (error) {
        errorHandler(dispatch, 'Error in fetch show stories.');
    }    
};