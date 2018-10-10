import { html } from '@polymer/lit-element';
import { PageViewElement } from '../../utils/page-view-elemet';
import { PageStyles } from '../styles';
// redux helpers
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../redux/store';
import { fetchUserDetails } from '../../redux/user/actions';

export class User extends connect(store)(PageViewElement) {
    static get properties() {
        return {
            userDetails: { type: Array }
        };
    }

    _stateChanged(state) {
        this.userDetails = state.user.userDetails;
    }

    firstUpdated(){
        store.dispatch(fetchUserDetails('tcsl_armor'));
    }

    render() {
        return html`
      <!-- Styles -->
      ${PageStyles}
      
      <!-- Content -->
      <section>
        <h2>User</h2>        
      </section>
    `;
    }
}
