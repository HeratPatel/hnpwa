import { LitElement, html } from '@polymer/lit-element';
import { SnackBarStyles } from './styles';

export class SnackBar extends LitElement {
    static get properties() {
        return {
            active: { type: Boolean }
        };
    }

    render() {
        return html`
        <!-- Styles -->
        ${SnackBarStyles}
        <!-- Content -->
        <slot></slot>
      `;
    }
}
