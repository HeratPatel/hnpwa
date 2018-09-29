import { html } from '@polymer/lit-element';
import { PageViewElement } from '../../utils/page-view-elemet';
import { SharedStyles } from '../../styles/shared-styles';
// redux helpers
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../redux/store';
import { fetchUserDetails } from '../../redux/user/actions';

export class User extends connect(store)(PageViewElement) {
    static get properties() {
        return {
            userDetails: Array
        };
    }

    _stateChanged(state) {
        this.userDetails = state.user.userDetails;
    }

    _firstRendered(){
        store.dispatch(fetchUserDetails('tcsl_armor'));
    }

    _render() {
        return html`
      <!-- Styles -->
      ${SharedStyles}
      <!-- Content -->
      <section>
        <h2>User</h2>        
      </section>
    `;
    }
}
