import { html } from '@polymer/lit-element';
import { PageViewElement } from '../../utils/page-view-elemet';
import { SharedStyles } from '../../styles/shared-styles';
// redux helpers
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../redux/store';
import { fetchJobStories } from '../../redux/jobs/actions';

export class Jobs extends connect(store)(PageViewElement) {
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

    _render() {
        return html`
      <!-- Styles -->
      ${SharedStyles}
      <!-- Content -->
      <section>
        <h2>Jobs</h2>        
      </section>
    `;
    }
}
