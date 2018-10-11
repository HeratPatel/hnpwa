import types from './types';

const newest = (state = [], action) => {
    switch(action.type){
    case types.STORE_NEW_STORIES:
        return action.newStories;

    default:
        return state;
    }
};

export default newest;