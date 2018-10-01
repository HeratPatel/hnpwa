import { html } from '@polymer/lit-element';
import { PageViewElement } from '../../utils/page-view-elemet';
import { SharedStyles } from '../../styles/shared-styles';
// redux helpers
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../redux/store';
import { fetchShowStories } from '../../redux/show/actions';

export class Show extends connect(store)(PageViewElement) {
    static get properties() {
        return {
            showStories: { type: Array }
        };
    }

    _stateChanged(state) {
        this.showStories = state.show.showStories;
    }

    firstUpdated(){
        store.dispatch(fetchShowStories(1));
    }

    render() {
        return html`
      <!-- Styles -->
      ${SharedStyles}
      <!-- Content -->
      <section>
        <h2>Show</h2>        
      </section>
    `;
    }
}
