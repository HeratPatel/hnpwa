import { html } from '@polymer/lit-element';
import { PageViewElement } from '../../utils/page-view-elemet';
import { SharedStyles } from '../../styles/shared-styles';
// redux helpers
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../redux/store';
import { fetchAskStories } from '../../redux/ask/actions';
import '../../components/list-item';

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
        return html`
      <!-- Styles -->
      ${SharedStyles}
      <!-- Content -->
      <section>
        <h2>Ask</h2>
        <list-item
            id="${18144646}"
            title="Ask HN: What does it feel like to master playing an instrument by ear?"
            points="${33}"
            user="osrec"            
            time_ago="13 hours ago"
            comments_count="${46}"            
            url="item?id=18144646"
        ></list-item>        
      </section>
    `;
    }
}
