import { LitElement, html } from '@polymer/lit-element';
import { plusIcon, minusIcon } from "../../icons";
import { ButtonStyles } from "../../styles/button-styles";
import { CounterElementStyles } from "./styles";

export class CounterElement extends LitElement {
    constructor(){
        super();
        this.clicks = 0;
        this.value = 0;
    }

    static get properties(){
        return {
            clicks: Number,
            value: Number
        }
    }

    _onIncrement() {
        this.value++;
        this.clicks++;
        this.dispatchEvent(new CustomEvent('counter-incremented'));
    }
    
      _onDecrement() {
        this.value--;
        this.clicks++;
        this.dispatchEvent(new CustomEvent('counter-decremented'));
    }

    _render({clicks, value}){
        return html`
            <!-- Styles -->
            ${ButtonStyles}
            ${CounterElementStyles}
            <!-- Content -->
            <div>
                <p>
                    Clicked: <span>${clicks}</span> times.
                    Value is <span>${value}</span>.
                    <button on-click="${() => this._onIncrement()}" title="Add 1">${plusIcon}</button>
                    <button on-click="${() => this._onDecrement()}" title="Minus 1">${minusIcon}</button>
                </p>
            </div>
        `;
    }
}