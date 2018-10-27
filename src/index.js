import { LitElement, html } from '@polymer/lit-element';
import { setPassiveTouchGestures } from '@polymer/polymer/lib/utils/settings';
import { connect } from 'pwa-helpers/connect-mixin';
import { installMediaQueryWatcher } from 'pwa-helpers/media-query';
import { installOfflineWatcher } from 'pwa-helpers/network';
import { installRouter } from 'pwa-helpers/router';
import { updateMetadata } from 'pwa-helpers/metadata';
import { MainStyles } from './styles';

import './components/snack-bar';
import './components/application-header';
import './components/application-footer';

// redux helpers
import { store } from './redux/store';
import { navigate, updateOffline, updateLayout } from './redux/app/actions';

class MyApp extends connect(store)(LitElement) {
    constructor() {
        super();
        setPassiveTouchGestures(true);
    }

    static get properties() {
        return {
            appTitle: { type: String },
            _page: { type: String },
            _snackbar: { type: Object }            
        };
    }

    stateChanged(state) {
        this._page = state.app.page;        
        this._snackbar = state.app.snackbar;
    }

    firstUpdated() {
        installRouter(location =>
            store.dispatch(navigate(window.decodeURIComponent(location.pathname)))
        );
        installOfflineWatcher(offline => store.dispatch(updateOffline(offline)));
        installMediaQueryWatcher('(min-width: 460px)', matches =>
            store.dispatch(updateLayout(matches))
        );
    }

    updated(changedProps) {
        if (changedProps.has('_page')) {
            const pageTitle = this.appTitle + ' - ' + this._page;
            updateMetadata({
                title: pageTitle,
                description: pageTitle
                // This object also takes an image property, that points to an img src.
            });
        }
    }

    render() {
        const { appTitle, _page, _snackbar } = this;
        return html`            
            ${MainStyles}
            
            <application-header currentPage="${_page}" appTitle="${appTitle}"></application-header>
            
            <main role="main" class="main-content">      
                <about-page class="page" ?active="${_page === 'about'}"></about-page>
                <ask-page class="page" ?active="${_page === 'ask'}"></ask-page>
                <jobs-page class="page" ?active="${_page === 'jobs'}"></jobs-page>
                <new-page class="page" ?active="${_page === 'new'}"></new-page>
                <show-page class="page" ?active="${_page === 'show'}"></show-page>
                <top-page class="page" ?active="${_page === 'top'}"></top-page>
                <item-page class="page" ?active="${_page === 'item'}"></item-page>
                <user-page class="page" ?active="${_page === 'user'}"></user-page>                    
                <page-404 class="page" ?active="${_page === '404'}"></page-404>      
            </main>
                        
            <application-footer></application-footer>
            
            <snack-bar ?active="${_snackbar.status}">${_snackbar.message}</snack-bar>    
        `;
    }   
}

window.customElements.define('my-app', MyApp);
