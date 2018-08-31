import { LitElement, html } from "@polymer/lit-element";
import { removeFromCartIcon } from "../../icons";
import { cartItemsSelector, cartTotalSelector } from "../../reducers/shop";
import { ButtonStyles } from "../../styles/button-styles";
import { ShopCartStyles } from "./styles";
import "../shop-items";
// redux helpers
import { connect } from 'pwa-helpers/connect-mixin.js';
import { store } from "../../store";
import { removeFromCart } from "../../actions/shop";

export class ShopCart extends connect(store)(LitElement) {
    static get properties(){
        return {
            items: Array,
            total: Number 
        };
    }

    _stateChanged(state){
        this.item = cartItemsSelector(state);
        this.total = cartTotalSelector(state);
    }

    _render({items, total}){
        return html`
            <!-- Styles -->
            ${ShopCartStyles}
            ${ButtonStyles}
            <!-- Contents -->
            <p hidden="${items && items.length !== 0}">Please add some products to cart.</p>
            ${items && items.map((item) => html`
                <div>
                    <shop-item name="${item.title}" amount="${item.amount}" price="${item.price}"></shop-item>
                    <button
                        on-click="${(e) => store.dispatch(removeFromCart(e.currentTarget.dataset['index']))}"
                        data-index$="${item.id}"
                        title="Remove from cart">
                        ${removeFromCartIcon}
                    </button>
                </div>
            `)}
            <p hidden="${items && items.length}"><b>Total:</b> ${total}</p>
        `;
    }
}

