import types from './types';
import { PAGES } from '../../constants';

const initialState = {
    ask: 1,
    jobs: 1,
    newest: 1,
    show: 1,
    top: 1,
    stories: [],
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
    },
    userDetails: {
        id: '',
        created_time: 0,
        created: '',
        karma: 0,
        avg: 0
    }
};

const page = (state = initialState, action) => {
    switch (action.type) {
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

    case types.STORE_PAGE_STORIES:
        if (action.pageName === PAGES.ITEM) {
            return {
                ...state,
                itemDetails: action.stories
            };
        } else if (action.pageName === PAGES.USER) {
            return {
                ...state,
                userDetails: action.stories
            };
        } else {
            return {
                ...state,
                stories: action.stories
            };
        }

    default:
        return state;
    }
};

export default page;
