import types from './types';
import { API_URI } from '../../constants';

const storeNewStories = (newStories) => ({
    type: types.STORE_NEW_STORIES,
    newStories
});

export const fetchNewStories = (page) => async (dispatch, getState, errorHandler) => {
    try {
        const response = await fetch(`${API_URI}/newest?page=${page}`);
        const data = await response.json();        
        if(data.error){            
            errorHandler(dispatch, data.error);
        }
        else{
            dispatch(storeNewStories(data));
        }  
    } catch (error) {
        errorHandler(dispatch, 'Error in fetch new stories.');
    }    
};