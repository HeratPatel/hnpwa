import types from './types';

export const incrementPageCount = (story) => ({
    type: types.INCREMENT_PAGE_COUNT,
    story
});

export const decrementPageCount = (story) => ({
    type: types.DECREMENT_PAGE_COUNT,
    story
});