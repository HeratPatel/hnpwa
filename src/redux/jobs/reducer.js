import types from './types';

const initialState = {
    jobStories: []
};

const jobs = (state = initialState, action) => {
    switch(action.type){
    case types.STORE_JOB_STORIES:
        return {
            ...state,
            jobStories: action.jobStories
        };

    default:
        return state;
    }
};

export default jobs;