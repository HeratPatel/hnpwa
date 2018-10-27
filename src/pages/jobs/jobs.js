import { html } from '@polymer/lit-element';
import { PageViewElement } from '../../utils/page-view-elemet';
import { PageStyles } from '../styles';
import '../../components/list-item';
// redux helpers
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../redux/store';
import { fetchJobStories } from '../../redux/jobs/actions';

export class Jobs extends connect(store)(PageViewElement) {
    static get properties() {
        return {
            jobStories: { type: Array },
            page: { type: Number }
        };
    }

    stateChanged(state) {
        const pageNo = state.page.jobs;
        if(this.page !== undefined && this.page !== pageNo){
            store.dispatch(fetchJobStories(pageNo));
        }
        this.jobStories = state.jobs;
        this.page = pageNo;
    }

    firstUpdated(){
        store.dispatch(fetchJobStories(this.page));
    }

    render() {
        const { jobStories } = this;

        return html`      
      ${PageStyles}
                  
      <section>            
        ${jobStories.length > 0 ? 
        jobStories.map(item => html`
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
