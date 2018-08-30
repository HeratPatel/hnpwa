import { html } from "@polymer/lit-element";
import { PageViewElement } from "../../helpers/page-view-elemet";
import { SharedStyles } from "../../styles/shared-styles";
import "../../components/counter-element";
// redux helpers
import { connect } from "pwa-helpers/connect-mixin";
import { store } from "../../store";
import { increment, decrement } from "../../actions/counter";

export class Counter extends connect(store)(PageViewElement) {
  static get properties() {
    return {
      clicks: Number,
      value: Number
    };
  }

  _stateChanged(state) {
    this.clicks = state.counter.clicks;
    this.value = state.counter.value;
  }

  _render({clicks, value}) {
    return html`
        <!-- Styles -->
        ${SharedStyles}
        <!-- Content -->
        <section>
            <h2>Redux example: simple counter</h2>
            <div class="circle">${value}</div>
            <p>This page contains a reusable <code>&lt;counter-element&gt;</code>. The
            element is not built in a Redux-y way (you can think of it as being a
            third-party element you got from someone else), but this page is connected to the
            Redux store. When the element updates its counter, this page updates the values
            in the Redux store, and you can see the current value of the counter reflected in
            the bubble above.</p>
            <br><br>
      </section>
      <section>
        <p>
          <counter-element value="${value}" clicks="${clicks}"
              on-counter-incremented="${() => store.dispatch(increment())}"
              on-counter-decremented="${() => store.dispatch(decrement())}">
          </counter-element>
        </p>
      </section>
    `;
  }
}
