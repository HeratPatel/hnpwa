import types from "./types";

/**
 * updatePage: Updates the Page
 * @param {string} page
 * @returns {object}
 */
const updatePage = page => {
  return {
    type: types.UPDATE_PAGE,
    page
  };
};

/**
 * showSnackbar: Shows Snackbar from bottom
 */
export const showSnackbar = () => dispatch => {
  let snackbarTimer;
  dispatch({
    type: types.OPEN_SNACKBAR
  });
  clearTimeout(snackbarTimer);
  snackbarTimer = setTimeout(
    () => dispatch({ type: types.CLOSE_SNACKBAR }),
    3000
  );
};

/**
 * updateOffline: Shows offline indicator
 * @param {boolean} offline
 */
export const updateOffline = offline => (dispatch, getState) => {
  // Show the snackbar, unless this is the first load of the page.
  if (getState().app.offline !== undefined) {
    dispatch(showSnackbar());
  }
  dispatch({
    type: types.UPDATE_OFFLINE,
    offline
  });
};

/**
 * updateLayout: updates layout wide/narrow
 * @param {*} wide
 */
export const updateLayout = wide => (dispatch, getState) => {
  if (getState().app.drawerOpened) {
    dispatch(updateDrawerState(false));
  }
};

/**
 * updateDrawerState: updates left drawer state
 * @param {boolean} opened
 */
export const updateDrawerState = opened => (dispatch, getState) => {
  if (getState().app.drawerOpened !== opened) {
    dispatch({
      type: types.UPDATE_DRAWER_STATE,
      opened
    });
  }
};

/**
 * navigate: navigates(loads) page for given path
 * @param {string} path
 */
export const navigate = path => dispatch => {
  const page = path === "/" ? "welcome" : path.slice(1);
  dispatch(loadPage(page)); // Loads Page
  dispatch(updateDrawerState(false)); // Close Drawer if open
};

/**
 * loadPage: Matches the page and dispatch updatePage action
 * @param {string} page
 */
const loadPage = page => dispatch => {
  switch (page) {
    case "welcome":
      import("../../pages/welcome/index.js");
      break;
    case "counter":
      import("../../pages/counter/index.js");
      break;
    case "shoppingCart":
      import("../../pages/shoppingCart/index.js");
      break;
    default:
      page = "404";
      import("../../pages/404/index.js");
  }

  dispatch(updatePage(page));
};
