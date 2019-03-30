import { html } from 'lit-element';
import { PageViewElement } from '../../utils/page-view-elemet';
import { PageStyles } from '../styles';
import { SettingsStyles } from './styles';
// redux helpers
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../redux/store';
import { showSnackbar } from '../../redux/app/actions';

import '@polymer/paper-checkbox/paper-checkbox.js';

export class Settings extends connect(store)(PageViewElement) {
    static get styles() {
        return [PageStyles, SettingsStyles];
    }

    async onChange(event) {
        const isChecked = event.target.checked;
        if (isChecked) {
            const permission = await document.querySelector('my-app').initFCM();
            const token = await permission.token;
            console.log('TOKEN', token);
            store.dispatch(
                showSnackbar({
                    status: true,
                    message: 'Push Notifications Enabled Successfully'
                })
            );
        }
    }

    render() {
        return html`
      <section>
        <div class="settings-container">
          <paper-checkbox @click="${this.onChange}"
            >Enable Push Notifications</paper-checkbox
          >
        </div>
      </section>
    `;
    }
}
