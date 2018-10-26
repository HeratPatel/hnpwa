import types from './types';
import { API_URI } from '../../constants';

const storeAskStories = (askStories) => ({
    type: types.STORE_ASK_STORIES,
    askStories
});

export const fetchAskStories = (page) => async (dispatch, getState, errorHandler) => {
    try {
        const response = await fetch(`${API_URI}/ask?page=${page}`);
        const data = await response.json();        
        if(data.error){            
            errorHandler(dispatch, data.error);
        }
        else{
            dispatch(storeAskStories(data));
        } 
    } catch(error){
        errorHandler(dispatch, 'Error in fetch ask stories.');
    }    
};