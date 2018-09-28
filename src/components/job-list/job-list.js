import { LitElement, html } from '@polymer/lit-element';
// redux helpers
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../redux/store';
import { fetchJobStories } from '../../redux/jobs/actions';

export class JobsList extends connect(store)(LitElement) {
    constructor(){
        super();
    }

    static get properties() {
        return {
            jobStories: Array
        };
    }

    _stateChanged(state) {
        this.jobStories = state.jobs.jobStories;
    }

    _firstRendered(){
        store.dispatch(fetchJobStories(1));
    }

    _render({jobStories}){        
        return html`
            <div>Job List</div>
        `;
    }
}