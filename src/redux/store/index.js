import {
    createStore,
    compose as origCompose,
    applyMiddleware,
    combineReducers
} from 'redux';
import thunk from 'redux-thunk';
import { lazyReducerEnhancer } from 'pwa-helpers/lazy-reducer-enhancer';
import { errorHandler } from '../../utils/error-handler';

import app from '../app/reducer';
import top from '../top/reducer';
import show from '../show/reducer';
import newest from '../newest/reducer';
import jobs from '../jobs/reducer';
import ask from '../ask/reducer';
import item from '../item/reducer';
import user from '../user/reducer';
import page from '../page/reducer';

// Sets up a Chrome extension for time travel debugging.
// See https://github.com/zalmoxisus/redux-devtools-extension for more information.
let compose = origCompose;

if(window.process.env.NODE_ENV !== 'production'){
    compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
}

// Initializes the Redux store with a lazyReducerEnhancer (so that you can
// lazily add reducers after the store has been created) and redux-thunk (so
// that you can dispatch async actions). See the "Redux and state management"
// section of the wiki for more details:
// https://github.com/Polymer/pwa-starter-kit/wiki/4.-Redux-and-state-management
export const store = createStore(
    (state) => state,
    compose(
        lazyReducerEnhancer(combineReducers),
        applyMiddleware(thunk.withExtraArgument(errorHandler))
    )
);

// Initially loaded reducers.
store.addReducers({
    app,
    top,
    show,
    newest,
    jobs,
    ask,
    item,
    user,
    page
});
