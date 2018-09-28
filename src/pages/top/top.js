import { html } from '@polymer/lit-element';
import { PageViewElement } from '../../utils/page-view-elemet';
import { SharedStyles } from '../../styles/shared-styles';
import '../../components/top-list';

export class Top extends PageViewElement {
    _render() {
        return html`
      <!-- Styles -->
      ${SharedStyles}
      <!-- Content -->
      <section>
        <h2>Top</h2>
        <top-list></top-list>
      </section>
    `;
    }
}
