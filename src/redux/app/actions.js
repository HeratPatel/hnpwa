import types from './types';
import { fetchUserDetails } from '../../redux/user/actions';
import { fetchItemDetails } from '../../redux/item/actions';

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
export const showSnackbar = (snackbar) => dispatch => {
    let snackbarTimer;
    dispatch({
        type: types.OPEN_SNACKBAR,
        snackbar
    });
    clearTimeout(snackbarTimer);
    snackbarTimer = setTimeout(
        () => dispatch({ 
            type: types.CLOSE_SNACKBAR,
            snackbar: {
                status: false,
                message: ''
            }
        }),
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
        if(offline){
            dispatch(showSnackbar({
                status: true,
                message: 'You are now offline.'
            }));
        } else {
            dispatch(showSnackbar({
                status: true,
                message: 'You are now online.'
            }));
        }
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
export const updateLayout = () => (dispatch, getState) => {
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
    const page = path === '/' ? 'top' : path.slice(1);
    const primarySlug = page.split('/')[0];
    const secondarySlug = page.split('/')[1];
    if(primarySlug === 'user'){
        dispatch(fetchUserDetails(secondarySlug));
    }
    if(primarySlug === 'item'){                
        dispatch(fetchItemDetails(secondarySlug));
    }
    dispatch(loadPage(primarySlug)); // Loads Page
    dispatch(updateDrawerState(false)); // Close Drawer if open
};

/**
 * loadPage: Matches the page and dispatch updatePage action
 * @param {string} page
 */
const loadPage = page => dispatch => {    
    switch (page) {
    case 'about':
      import('../../pages/about/index.js');
        break;
    case 'ask':
      import('../../pages/ask/index.js');
        break;
    case 'jobs':
      import('../../pages/jobs/index.js');
        break;
    case 'new':
      import('../../pages/new/index.js');
        break;
    case 'show':
      import('../../pages/show/index.js');
        break;
    case 'top':
      import('../../pages/top/index.js');
        break;
    case 'item':
        import('../../pages/item/index.js');
        break;
    case 'user':
        import('../../pages/user/index.js');
        break;
    default:
        page = '404';
      import('../../pages/404/index.js');
    }

    dispatch(updatePage(page));
};
