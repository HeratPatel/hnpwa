import { LitElement, html } from '@polymer/lit-element';
import { FooterStyles } from './styles';

export class Footer extends LitElement {
    _render() {
        return html`
        ${FooterStyles}
        <footer>
            <p>Made with &hearts; by the Polymer team.</p>
        </footer>
    `;
    }
}
