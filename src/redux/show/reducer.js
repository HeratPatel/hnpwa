import types from './types';

const show = (state = [], action) => {
    switch(action.type){
    case types.STORE_SHOW_STORIES:
        return action.showStories;

    default:
        return state;
    }
};

export default show;