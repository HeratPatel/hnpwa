import types from './types';

const top = (state = [], action) => {
    switch(action.type){
    case types.STORE_TOP_STORIES:
        return action.topStories;

    default:
        return state;
    }
};

export default top;