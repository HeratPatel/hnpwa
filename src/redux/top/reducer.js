import types from './types';

const initialState = {
    topStories: []
};

const top = (state = initialState, action) => {
    switch(action.type){
    case types.STORE_TOP_STORIES:
        return {
            ...state,
            topStories: action.topStories
        };

    default:
        return state;
    }
};

export default top;