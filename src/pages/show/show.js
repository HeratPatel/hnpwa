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
            showStories: { type: Array },
            page: {type: Number}
        };
    }

    _stateChanged(state) {
        this.showStories = state.show.showStories;
        this.page = state.page.show;
    }

    firstUpdated(){
        store.dispatch(fetchShowStories(this.page));
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
