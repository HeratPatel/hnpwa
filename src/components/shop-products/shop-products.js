import { LitElement, html } from "@polymer/lit-element";
import { addToCartIcon } from "../../icons";
import { ShopProductsStyles } from "./styles";
import "../shop-items";
// redux helpers
import { connect } from "pwa-helpers/connect-mixin";
import { store } from "../../store";
import { getAllProducts, addToCart } from "../../actions/shop";
import { ButtonStyles } from "../../styles/button-styles";

export class ShopProducts extends connect(store)(LitElement) {
  static get properties() {
    return {
      products: Object
    };
  }

  _firstRendered() {
    store.dispatch(getAllProducts());
  }

  _stateChanged(state){
    this.products = state.shop.products;
  }

  _render({products}){
    return html`
        <!-- Styles -->
        ${ShopProductsStyles}
        ${ButtonStyles}
        <!-- Content -->
        ${Object.keys(products).map((key) => {
            const item = products[key];
            return html`
                <div>
                    <shop-items name="${item.title}" amount="${item.inventory}" price="${item.price}"></shop-items>
                    <button
                        disabled="${item.inventory === 0}"
                        on-click="${(e) => store.dispatch(addToCart(e.currentTarget.dataset['index']))}"
                        data-index$="${item.id}"
                        title="${item.inventory === 0 ? 'Sold out' : 'Add to cart' }">
                        ${item.inventory === 0 ? 'Sold out': addToCartIcon }
                    </button>
                </div>
            `;
        })}
    `;
  }
}
