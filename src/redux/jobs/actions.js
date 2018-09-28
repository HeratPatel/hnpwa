import types from './types';
import { API_URI } from '../../constants';

const storeJobStories = (jobStories) => ({
    type: types.STORE_JOB_STORIES,
    jobStories
});

export const fetchJobStories = (page) => async (dispatch) => {
    const response = await fetch(`${API_URI}/jobs?page=${page}`);
    const data = await response.json();    
    dispatch(storeJobStories(data));
};