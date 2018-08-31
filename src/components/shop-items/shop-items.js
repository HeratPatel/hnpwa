import { LitElement, html } from "@polymer/lit-element";

export class ShopItem extends LitElement {
  static get properties() {
    return {
      name: String,
      amount: String,
      price: String
    };
  }

  _render({name, amount, price}) {
    return html`
      ${name}:
      <span hidden="${amount === 0}">${amount} * </span>
      $${price}
      </span>
    `;
  }
}
