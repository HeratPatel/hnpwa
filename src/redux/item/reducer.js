import types from './types';

const initialState = {
    itemDetails: {
        id: '',
        title: '',
        points: 0,
        user: '',
        time: 0,
        time_ago: '',
        type: '',
        url: '',
        domain: '',
        comments: [],
        comments_count: 0
    }
};

const item = (state = initialState, action) => {
    switch(action.type){
    case types.STORE_ITEM_DETAILS:
        return {
            ...state,
            itemDetails: action.itemDetails
        };

    default:
        return state;
    }
};

export default item;