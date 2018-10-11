import { LitElement, html } from '@polymer/lit-element';
import { FooterStyles } from './styles';
import { nextIcon, prevIcon } from '../../icons';
// redux helpers
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../redux/store';
import { incrementPageCount, decrementPageCount } from '../../redux/page/actions';

export class Footer extends connect(store)(LitElement) {
    static get properties() {
        return {
            pageNo: {type: Number},
            currentPage: {type: String}
        };
    }

    _stateChanged(state) {
        const page = state.app.page === 'new' ? 'newest' : state.app.page;
        this.currentPage = page;
        this.pageNo = state.page[page];
    }

    render() {
        const { currentPage, pageNo } = this;

        return html`
        <!-- Styles -->
        ${FooterStyles}
        <!-- Content -->
        <footer>            
            <div class="pagination">
                <button @click="${() => store.dispatch(decrementPageCount(currentPage))}">${prevIcon}</button>
                <span>${pageNo}</span>
                <button @click="${() => store.dispatch(incrementPageCount(currentPage))}">${nextIcon}</button>
            </div>
        </footer>
    `;
    }
}
