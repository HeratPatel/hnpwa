import types from './types';

const initialState = {
    showStories: []
};

const show = (state = initialState, action) => {
    switch(action.type){
    case types.STORE_SHOW_STORIES:
        return {
            ...state,
            showStories: action.showStories
        };

    default:
        return state;
    }
};

export default show;