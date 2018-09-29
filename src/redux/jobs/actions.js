import types from './types';
import { API_URI } from '../../constants';
import { errorHandler } from '../../utils/error-handler';

const storeJobStories = (jobStories) => ({
    type: types.STORE_JOB_STORIES,
    jobStories
});

export const fetchJobStories = (page) => async (dispatch) => {
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