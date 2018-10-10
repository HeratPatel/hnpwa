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

    _stateChanged(state) {
        this.askStories = state.ask.askStories;
        this.page = state.page.ask;
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
                <ul>
                ${askStories.length > 0 ? 
                    askStories.map(item => html`
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
                </ul>
            </section>                               
        `;
    }
}
