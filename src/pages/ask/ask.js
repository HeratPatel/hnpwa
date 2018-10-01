import { html } from '@polymer/lit-element';
import { PageViewElement } from '../../utils/page-view-elemet';
import { SharedStyles } from '../../styles/shared-styles';
// redux helpers
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../redux/store';
import { fetchAskStories } from '../../redux/ask/actions';

export class Ask extends connect(store)(PageViewElement) {
    static get properties(){
        return {
            askStories: { type: Array }
        };
    }

    _stateChanged(state) {
        this.askStories = state.ask.askStories;
    }

    firstUpdated(){
        store.dispatch(fetchAskStories(1));
    }

    render() {
        return html`
      <!-- Styles -->
      ${SharedStyles}
      <!-- Content -->
      <section>
        <h2>Ask</h2>        
      </section>
    `;
    }
}
