import { LitElement, html } from '@polymer/lit-element';
// redux helpers
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../redux/store';
import { fetchTopStories } from '../../redux/top/actions';

export class TopList extends connect(store)(LitElement) {
    constructor(){
        super();
    }

    static get properties() {
        return {
            topStories: Array
        };
    }

    _stateChanged(state) {
        this.topStories = state.top.topStories;
    }

    _firstRendered(){
        store.dispatch(fetchTopStories(1));
    }

    _render({topStories}){        
        return html`
            <div>Top List</div>
        `;
    }
}