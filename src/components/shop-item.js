import { LitElement, html } from '@polymer/lit-element';

// This element is *not* connected to the Redux store.
class ShopItem extends LitElement {
  _render(props) {
    return html`
      ${props.name}:
      <span hidden="${props.amount === 0}">${props.amount} * </span>
      $${props.price}
      </span>
    `;
  }

  static get properties() {
    return {
      name: String,
      amount: String,
      price: String
    }
  }
}

window.customElements.define('shop-item', ShopItem);
