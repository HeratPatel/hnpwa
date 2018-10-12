import { html } from '@polymer/lit-element';
import { PageViewElement } from '../../utils/page-view-elemet';
import { PageStyles } from '../styles';
import '../../components/list-item';
// redux helpers
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../redux/store';
import { fetchTopStories } from '../../redux/top/actions';

export class Top extends connect(store)(PageViewElement) {
    static get properties() {
        return {
            topStories: {type: Array},
            page: {type: Number}
        };
    }

    _stateChanged(state) {
        const pageNo = state.page.top;
        if(this.page !== undefined && this.page !== pageNo){
            store.dispatch(fetchTopStories(pageNo));
        }
        this.topStories = state.top;
        this.page = pageNo;
    }

    firstUpdated(){
        store.dispatch(fetchTopStories(this.page));
    }

    render() {
        const { topStories } = this;

        return html`
            <!-- Styles -->
            ${PageStyles}
            
            <!-- Content -->
            <section>                
                    ${topStories.length > 0 ?
        topStories.map(item => html`
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
                        `)
        :
        html`
                            <div>No Content</div>
                        `
}                           
            </section>
        `;
    }
}
