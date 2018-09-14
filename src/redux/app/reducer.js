import types from "./types";

const initialState = {
  drawerOpened: false
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
        snackbarOpened: true
      };
    case types.CLOSE_SNACKBAR:
      return {
        ...state,
        snackbarOpened: false
      };
    default:
      return state;
  }
};

export default app;
