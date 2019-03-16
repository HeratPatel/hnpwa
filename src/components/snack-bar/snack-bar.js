import { LitElement, html } from 'lit-element';
import { SnackBarStyles } from './styles';

export class SnackBar extends LitElement {
    static get properties() {
        return {
            active: { type: Boolean }
        };
    }

    static get styles() {
        return [SnackBarStyles];
    }

    render() {
        return html`
      <slot></slot>
    `;
    }
}
