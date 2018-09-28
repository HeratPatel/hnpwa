import { html } from '@polymer/lit-element';
import { PageViewElement } from '../../utils/page-view-elemet';
import { SharedStyles } from '../../styles/shared-styles';
import '../../components/new-list';

export class New extends PageViewElement {
    _render() {
        return html`
      <!-- Styles -->
      ${SharedStyles}
      <!-- Content -->
      <section>
        <h2>New</h2>
        <new-list></new-list>
      </section>
    `;
    }
}
