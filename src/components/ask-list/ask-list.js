import { LitElement, html } from '@polymer/lit-element';
// redux helpers
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../redux/store';
import { fetchAskStories } from '../../redux/ask/actions';

export class AskList extends connect(store)(LitElement) {
    constructor(){
        super();
    }

    static get properties() {
        return {
            askStories: Array
        };
    }

    _stateChanged(state) {
        this.askStories = state.ask.askStories;
    }

    _firstRendered(){
        store.dispatch(fetchAskStories(1));
    }

    _render({askStories}){        
        return html`
            <div>Ask List</div>
        `;
    }
}