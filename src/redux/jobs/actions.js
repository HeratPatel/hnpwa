import types from './types';
import { API_URI } from '../../constants';

const storeJobStories = (jobStories) => ({
    type: types.STORE_JOB_STORIES,
    jobStories
});

export const fetchJobStories = (page) => async (dispatch, getState, errorHandler) => {
    try {
        const response = await fetch(`${API_URI}/jobs?page=${page}`);
        const data = await response.json();        
        if(data.error){            
            errorHandler(dispatch, data.error);
        }
        else{
            dispatch(storeJobStories(data));
        }    
    } catch (error) {
        errorHandler(dispatch, 'Error in fetch job stories.');
    }    
};