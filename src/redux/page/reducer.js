import types from './types';

const initialState = {
    ask: 1,
    jobs: 1,
    newest: 1,
    show: 1,
    top: 1    
};

const page = (state = initialState, action) => {
    switch(action.type){
    case types.INCREMENT_PAGE_COUNT:
        return {
            ...state,
            [action.story]: ++state[action.story]
        };

    case types.DECREMENT_PAGE_COUNT:
        return {
            ...state,
            [action.story]: --state[action.story]
        };

    default:
        return state;
    }
};

export default page;