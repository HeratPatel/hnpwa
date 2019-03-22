import { html } from 'lit-element';
import { PageViewElement } from '../../utils/page-view-elemet';
import { PageStyles } from '../styles';
import { PAGES } from '../../constants';
import '../../components/list-item';
// redux helpers
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../redux/store';
import { fetchPageStories } from '../../redux/page/actions';

export class Show extends connect(store)(PageViewElement) {
    static get properties() {
        return {
            showStories: { type: Array },
            page: { type: Number }
        };
    }

    static get styles() {
        return [PageStyles];
    }

    stateChanged(state) {
        const pageNo = state.page.show;
        if (this.page !== undefined && this.page !== pageNo) {
            store.dispatch(fetchPageStories(pageNo, PAGES.SHOW));
        }
        this.showStories = state.page.stories;
        this.page = pageNo;
    }

    firstUpdated() {
        store.dispatch(fetchPageStories(this.page, PAGES.SHOW));
    }

    render() {
        const { showStories } = this;
        return html`
      <section>
        ${showStories.length > 0
        ? showStories.map(
            item => html`
                <list-item
                  id="${item.id}"
                  title="${item.title}"
                  points="${item.points}"
                  user="${item.user}"
                  time_ago="${item.time_ago}"
                  comments_count="${item.comments_count}"
                  url="${item.url}"
                  domain="${item.domain || ''}"
                  type="${item.type}"
                >
                </list-item>
              `
        )
        : html`
              <div>No Content</div>
            `}
      </section>
    `;
    }
}
