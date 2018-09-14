import { LitElement, html } from "@polymer/lit-element";
import { menuIcon } from "../../icons";
import { HeaderStyles } from "./styles";
// redux helpers
import { connect } from "pwa-helpers/connect-mixin";
import { store } from "../../redux/store";
import { updateDrawerState } from "../../redux/app/actions";
// polymer elements
import "@polymer/app-layout/app-drawer/app-drawer";
import "@polymer/app-layout/app-header/app-header";
import "@polymer/app-layout/app-toolbar/app-toolbar";
import "@polymer/app-layout/app-scroll-effects/effects/waterfall";

export class Header extends connect(store)(LitElement) {
  constructor() {
    super();
  }

  static get properties() {
    return {
      appTitle: String,
      currentPage: String,
      isDrawerOpened: Boolean
    };
  }

  _stateChanged(state) {
    this.isDrawerOpened = state.app.drawerOpened;
  }

  _render({ appTitle, currentPage, isDrawerOpened }) {
    return html`
      ${HeaderStyles}

    <!-- Header -->
    <app-header condenses reveals effects="waterfall">
      <app-toolbar class="toolbar-top">
        <button class="menu-btn" title="Menu" on-click="${_ =>
          store.dispatch(updateDrawerState(true))}">${menuIcon}</button>
        <div main-title>${appTitle}</div>
      </app-toolbar>

      <!-- This gets hidden on a small screen-->
      <nav class="toolbar-list">        
        <a selected?="${currentPage === "welcome"}" href="/welcome">Welcome</a>
        <a selected?="${currentPage === "counter"}" href="/counter">Counter</a>
        <a selected?="${currentPage ===
          "shoppingCart"}" href="/shoppingCart">Shopping Cart</a>
      </nav>
    </app-header>

    <!-- Drawer content -->
    <app-drawer opened="${isDrawerOpened}"
        on-opened-changed="${e =>
          store.dispatch(updateDrawerState(e.target.opened))}">
      <nav class="drawer-list">        
        <a selected?="${currentPage === "welcome"}" href="/welcome">Welcome</a>
        <a selected?="${currentPage === "counter"}" href="/counter">Counter</a>
        <a selected?="${currentPage ===
          "shoppingCart"}" href="/shoppingCart">Shopping Cart</a>
      </nav>
    </app-drawer>
    `;
  }
}
