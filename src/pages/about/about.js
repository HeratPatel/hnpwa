import { html } from 'lit-element';
import { PageViewElement } from '../../utils/page-view-elemet';
import { PageStyles } from '../styles';

export class About extends PageViewElement {
    static get styles() {
        return [PageStyles];
    }

    render() {
        return html`
      <section>
        <p>
          This is an example of PWA built using Polymer
          <a href="https://github.com/Polymer/pwa-starter-kit"
            >pwa-starter-kit</a
          >.
        </p>
        <p>Made with kindness in &hearts; India.</p>
      </section>
    `;
    }
}
