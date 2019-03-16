import { html } from 'lit-element';
import { PageViewElement } from '../../utils/page-view-elemet';
import { PageStyles } from '../styles';
// redux helpers
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../redux/store';

export class User extends connect(store)(PageViewElement) {
    static get properties() {
        return {
            userDetails: { type: Array }
        };
    }

    static get styles() {
        return [PageStyles];
    }

    stateChanged(state) {
        this.userDetails = state.user.userDetails;
    }

    render() {
        const { userDetails } = this;

        return html`
      <section>
        <h2>${userDetails.id}</h2>
        <div class="user-details">
          <span><b>Karma:</b> ${userDetails.karma}</span>
          <span><b>Created:</b> ${userDetails.created}</span>
        </div>
      </section>
    `;
    }
}
