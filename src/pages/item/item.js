import { html } from '@polymer/lit-element';
import { PageViewElement } from '../../utils/page-view-elemet';
import { SharedStyles } from '../../styles/shared-styles';
// redux helpers
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../redux/store';
import { fetchItemDetails } from '../../redux/item/actions';

export class Item extends connect(store)(PageViewElement) {
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

    _render() {
        return html`
      <!-- Styles -->
      ${SharedStyles}
      <!-- Content -->
      <section>
        <h2>Item Details</h2>        
      </section>
    `;
    }
}
