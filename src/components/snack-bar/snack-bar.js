import { LitElement, html } from '@polymer/lit-element';
import { SnackBarStyles } from './styles';

export class SnackBar extends LitElement {
    static get properties() {
        return {
            active: Boolean
        };
    }

    _render() {
        return html`
        <!-- Styles -->
        ${SnackBarStyles}
        <!-- Content -->
        <slot></slot>
      `;
    }
}
