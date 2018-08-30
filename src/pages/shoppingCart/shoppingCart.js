import { html } from "@polymer/lit-element";
import { PageViewElement } from "../../helpers/page-view-elemet";
import { ButtonStyles } from "../../styles/button-styles";
import { SharedStyles } from "../../styles/shared-styles";
import { addToCartIcon } from "../../icons";
import { ShoppingCartStyles } from "./styles";
import "../../components/shop-products";
import "../../components/shop-cart";
// redux helpers
import { connect } from "pwa-helpers/connect-mixin";
import { store } from "../../store";
import { checkout } from "../../actions/shop";
import { cartQuantitySelector } from "../../reducers/shop";

export class ShoppingCart extends connect(store)(PageViewElement) {
  static get properties() {
    return {
      quantity: Number,
      error: String
    };
  }

  _stateChanged(state) {
    this.quantity = cartQuantitySelector(state);
    this.error = state.shop.error;
  }

  _render({ quantity, error }) {
    return html`
        <!-- Styles -->
        ${ShoppingCartStyles}
        ${ButtonStyles}
        ${SharedStyles}
        <!-- Content -->
        <section>
            <h2>Redux example: shopping cart</h2>
            <div class="cart">${addToCartIcon}<div class="circle small">${quantity}</div></div>
            <p>This is a slightly more advanced Redux example, that simulates a
            shopping cart: getting the products, adding/removing items to the
            cart, and a checkout action, that can sometimes randomly fail (to
            simulate where you would add failure handling). </p>
            <p>This view, as well as its 2 child elements, <code>&lt;shop-products&gt;</code> and
            <code>&lt;shop-cart&gt;</code> are connected to the Redux store.</p>
        </section>
        <section>
            <h3>Products</h3>
            <shop-products></shop-products>

            <br>
            <h3>Your Cart</h3>
            <shop-cart></shop-cart>

            <div>${error}</div>
            <br>
            <p>
            <button hidden="${quantity == 0}"
                on-click="${() => store.dispatch(checkout())}">
                Checkout
            </button>
            </p>
        </section>        
    `;
  }
}
