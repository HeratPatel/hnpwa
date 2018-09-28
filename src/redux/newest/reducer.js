import types from './types';

const initialState = {
    newStories: []
};

const newest = (state = initialState, action) => {
    switch(action.type){
    case types.STORE_NEW_STORIES:
        return {
            ...state,
            newStories: action.newStories
        };

    default:
        return state;
    }
};

export default newest;