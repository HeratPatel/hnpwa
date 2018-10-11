import types from './types';

const jobs = (state = [], action) => {
    switch(action.type){
    case types.STORE_JOB_STORIES:
        return action.jobStories;

    default:
        return state;
    }
};

export default jobs;