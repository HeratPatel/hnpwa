import { html } from '@polymer/lit-element';
import { PageViewElement } from '../../utils/page-view-elemet';
import { PageStyles } from '../styles';

export class About extends PageViewElement {
    render() {
        return html`
      <!-- Styles -->
      ${PageStyles}
      
      <!-- Content -->
      <section>
        <h2>About</h2>
      </section>
    `;
    }
}
