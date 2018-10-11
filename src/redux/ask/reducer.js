import types from './types';

const ask = (state = [], action) => {
    switch(action.type){
    case types.STORE_ASK_STORIES:
        return action.askStories;

    default:
        return state;
    }
};

export default ask;