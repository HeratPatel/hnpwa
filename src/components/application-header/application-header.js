import { LitElement, html } from '@polymer/lit-element';
import { menuIcon } from '../../icons';
import { HeaderStyles } from './styles';
// redux helpers
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../redux/store';
import { updateDrawerState } from '../../redux/app/actions';
// polymer elements
import '@polymer/app-layout/app-drawer/app-drawer';
import '@polymer/app-layout/app-header/app-header';
import '@polymer/app-layout/app-toolbar/app-toolbar';
import '@polymer/app-layout/app-scroll-effects/effects/waterfall';

export class Header extends connect(store)(LitElement) {
    static get properties() {
        return {
            appTitle: { type: String },
            currentPage: { type: String },
            isDrawerOpened: { type: Boolean }
        };
    }

    stateChanged(state) {
        this.isDrawerOpened = state.app.drawerOpened;
    }

    updateDrawerState(){
        store.dispatch(updateDrawerState(true));
    }

    render() {
        const { appTitle, currentPage, isDrawerOpened } = this;
        return html`
          <!-- Styles -->
          ${HeaderStyles}

          <!-- Header -->
          <app-header fixed reveals effects="waterfall">
            <app-toolbar class="toolbar-top">
              <button class="menu-btn" title="Menu" @click="${this.updateDrawerState}">${menuIcon}</button>
              <div main-title>${appTitle}</div>
            </app-toolbar>

            <!-- This gets hidden on a small screen-->
            <nav class="toolbar-list">        
              <a ?selected=${currentPage === 'top'} href="/top">Top</a>
              <a ?selected=${currentPage === 'new'} href="/new">New</a>
              <a ?selected=${currentPage === 'show'} href="/show">Show</a>
              <a ?selected=${currentPage === 'ask'} href="/ask">Ask</a>
              <a ?selected=${currentPage === 'jobs'} href="/jobs">Jobs</a>
              <a ?selected=${currentPage === 'about'} href="/about">About</a>
            </nav>
          </app-header>

          <!-- Drawer content -->
          <app-drawer .opened="${isDrawerOpened}"
              @opened-changed="${e =>
        store.dispatch(updateDrawerState(e.target.opened))}">
            <nav class="drawer-list">        
              <a ?selected=${currentPage === 'top'} href="/top">Top</a>
              <a ?selected=${currentPage === 'new'} href="/new">New</a>
              <a ?selected=${currentPage === 'show'} href="/show">Show</a>
              <a ?selected=${currentPage === 'ask'} href="/ask">Ask</a>
              <a ?selected=${currentPage === 'jobs'} href="/jobs">Jobs</a>
              <a ?selected=${currentPage === 'about'} href="/about">About</a>
            </nav>
          </app-drawer>
        `;
    }
}
