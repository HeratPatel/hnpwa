import types from './types';
import { API_URI } from '../../constants';

export const incrementPageCount = story => ({
    type: types.INCREMENT_PAGE_COUNT,
    story
});

export const decrementPageCount = story => ({
    type: types.DECREMENT_PAGE_COUNT,
    story
});

const storePageStories = (stories, pageName) => ({
    type: types.STORE_PAGE_STORIES,
    stories,
    pageName
});

export const fetchPageStories = (page, pageName) => async (
    dispatch,
    getState,
    errorHandler
) => {
    try {
        let response = null;
        let data = null;
        if (pageName === 'item' || pageName === 'user') {
            response = await fetch(`${API_URI}/${pageName}/${page}`);
        } else {
            response = await fetch(`${API_URI}/${pageName}?page=${page}`);
        }
        if (response) {
            data = await response.json();
        }
        if (data === null || data.error) {
            errorHandler(dispatch, data.error);
        } else {
            dispatch(storePageStories(data, pageName));
        }
    } catch (error) {
        errorHandler(dispatch, 'Error in fetch ask stories.');
    }
};
