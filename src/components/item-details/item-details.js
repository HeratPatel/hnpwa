import { LitElement, html } from '@polymer/lit-element';
// redux helpers
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../redux/store';
import { fetchItemDetails } from '../../redux/item/actions';

export class ItemDetails extends connect(store)(LitElement) {
    constructor(){
        super();
    }

    static get properties() {
        return {
            itemDetails: Array
        };
    }

    _stateChanged(state) {
        this.itemDetails = state.item.itemDetails;
    }

    _firstRendered(){
        store.dispatch(fetchItemDetails(18090651));
    }

    _render({itemDetails}){        
        return html`
            <div>Item Details</div>
        `;
    }
}