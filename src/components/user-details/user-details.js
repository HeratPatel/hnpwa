import { LitElement, html } from '@polymer/lit-element';
// redux helpers
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../redux/store';
import { fetchUserDetails } from '../../redux/user/actions';

export class UserDetails extends connect(store)(LitElement) {
    constructor(){
        super();
    }

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

    _render({userDetails}){
        return html`
            <div>User Details</div>
        `;
    }
}