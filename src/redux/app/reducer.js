import types from './types';

const initialState = {
    drawerOpened: false,
    snackbar: {
        status: false,
        message: ''
    }
};

const app = (state = initialState, action) => {
    switch (action.type) {
    case types.UPDATE_PAGE:
        return {
            ...state,
            page: action.page
        };
    case types.UPDATE_OFFLINE:
        return {
            ...state,
            offline: action.offline
        };
    case types.UPDATE_DRAWER_STATE:
        return {
            ...state,
            drawerOpened: action.opened
        };
    case types.OPEN_SNACKBAR:
        return {
            ...state,
            snackbar: action.snackbar
        };
    case types.CLOSE_SNACKBAR:
        return {
            ...state,
            snackbar: action.snackbar
        };
    default:
        return state;
    }
};

export default app;
