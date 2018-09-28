import { LitElement, html } from '@polymer/lit-element';
// redux helpers
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../redux/store';
import { fetchShowStories } from '../../redux/show/actions';

export class ShowList extends connect(store)(LitElement) {
    constructor(){
        super();
    }

    static get properties() {
        return {
            showStories: Array
        };
    }

    _stateChanged(state) {
        this.showStories = state.show.showStories;
    }

    _firstRendered(){
        store.dispatch(fetchShowStories(1));
    }

    _render({showStories}){        
        return html`
            <div>Show List</div>
        `;
    }
}