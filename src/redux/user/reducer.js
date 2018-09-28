import types from './types';

const initialState = {
    userDetails: {
        id: '',
        created_time: 0,
        created: '',
        karma: 0,
        avg: 0
    }
};

const user = (state = initialState, action) => {
    switch(action.type){
    case types.STORE_USER_DETAILS:
        return {
            ...state,
            userDetails: action.userDetails
        };

    default:
        return state;
    }
};

export default user;