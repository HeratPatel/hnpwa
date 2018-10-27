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
            currentPage: {type: String},
            items: {type: Array}
        };
    }

    stateChanged(state) {
        const page = state.app.page === 'new' ? 'newest' : state.app.page;
        this.currentPage = page;
        this.pageNo = state.page[page];
        this.items = state[page];              
    }

    decrementPageCount(){
        const { currentPage } = this;
        store.dispatch(decrementPageCount(currentPage))
    }

    incrementPageCount(){
        const { currentPage } = this;
        store.dispatch(incrementPageCount(currentPage))
    }

    render() {
        const { currentPage, pageNo, items } = this;
        const isPrevDisabled = (pageNo === 1);
        const isNextDisabled = (items && items.length < 30);
        
        if(currentPage === 'user' || currentPage === 'item' || currentPage === 'about'){
            return html`                
                ${FooterStyles}                
                <footer>
                    <p>Made with &hearts; by the <a href="https://github.com/HeratPatel">Herat Patel</a>.</p>
                </footer>
            `;
        }

        return html`        
        ${FooterStyles}        
        <footer>
            <div class="pagination">
                <button .disabled="${isPrevDisabled}" title="Previous_Page" @click="${this.decrementPageCount}">${prevIcon}</button>
                <span>${pageNo}</span>
                <button .disabled="${isNextDisabled}" title="Next_Page" @click="${this.incrementPageCount}">${nextIcon}</button>
            </div>                        
        </footer>
    `;
    }
}
