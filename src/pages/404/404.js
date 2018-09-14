import { html } from '@polymer/lit-element';
import { PageViewElement } from '../../helpers/page-view-elemet';
import { SharedStyles } from '../../styles/shared-styles';

export class Page404 extends PageViewElement {
    _render() {
        return html`
        <!-- Styles -->
        ${SharedStyles}
        <!-- Content -->
        <section>
          <h2>Oops! You hit a 404</h2>
          <p>The page you're looking for doesn't seem to exist. Head back <a href="/">home</a> and try again?</p>
        </section>
      `;
    }
}
