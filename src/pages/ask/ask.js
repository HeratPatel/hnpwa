import { html } from '@polymer/lit-element';
import { PageViewElement } from '../../utils/page-view-elemet';
import { PageStyles } from '../styles';
import '../../components/list-item';
// redux helpers
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../redux/store';
import { fetchAskStories } from '../../redux/ask/actions';

export class Ask extends connect(store)(PageViewElement) {
    static get properties(){
        return {
            askStories: { type: Array },
            page: { type: Number }            
        };
    }

    stateChanged(state) {        
        const pageNo = state.page.ask;
        if(this.page !== undefined && this.page !== pageNo){
            store.dispatch(fetchAskStories(pageNo));
        }      
        this.askStories = state.ask;
        this.page = pageNo;
    }

    firstUpdated(){        
        store.dispatch(fetchAskStories(this.page));
    }

    render() {
        const { askStories } = this;        

        return html`
            <!-- Styles -->
            ${PageStyles}

            <!-- Content -->
            <section>                
                ${askStories.length > 0 ? 
        askStories.map(item => html`
                        <list-item
                            id="${item.id}"
                            title="${item.title}"
                            points="${item.points}"
                            user="${item.user}"
                            time_ago="${item.time_ago}"
                            comments_count="${item.comments_count}"
                            url="${`/item/${item.url.split('id=')[1]}`}"
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
