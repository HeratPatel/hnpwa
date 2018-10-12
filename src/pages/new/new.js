import { html } from '@polymer/lit-element';
import { PageViewElement } from '../../utils/page-view-elemet';
import { PageStyles } from '../styles';
import '../../components/list-item';
// redux helpers
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../redux/store';
import { fetchNewStories } from '../../redux/newest/actions';

export class New extends connect(store)(PageViewElement) {
    static get properties() {
        return {
            newStories: {type: Array},
            page: {type: Number}
        };
    }

    _stateChanged(state) {
        const pageNo = state.page.newest;
        if(this.page !== undefined && this.page !== pageNo){
            store.dispatch(fetchNewStories(pageNo));
        }
        this.newStories = state.newest;
        this.page = pageNo;
    }

    firstUpdated(){
        store.dispatch(fetchNewStories(this.page));
    }

    render() {
        const { newStories } = this;

        return html`
            <!-- Styles -->
            ${PageStyles}
            
            <!-- Content -->
            <section>                
                    ${newStories.length > 0 ?
        newStories.map(item => html`
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
