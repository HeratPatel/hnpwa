import { LitElement, html } from '@polymer/lit-element';
// redux helpers
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../redux/store';
import { fetchNewStories } from '../../redux/newest/actions';

export class NewList extends connect(store)(LitElement) {
    constructor(){
        super();
    }

    static get properties() {
        return {
            newStories: Array
        };
    }

    _stateChanged(state) {
        this.newStories = state.newest.newStories;
    }

    _firstRendered(){
        store.dispatch(fetchNewStories(1));
    }

    _render({newStories}){        
        return html`
            <div>New List</div>
        `;
    }
}