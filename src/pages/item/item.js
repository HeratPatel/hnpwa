import { html } from '@polymer/lit-element';
import { PageViewElement } from '../../utils/page-view-elemet';
import { PageStyles } from '../styles';
import { ItemStyles } from './styles';
import '../../components/list-item';
import '../../components/item-comment';
// redux helpers
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../redux/store';
import { fetchItemDetails } from '../../redux/item/actions';

export class Item extends connect(store)(PageViewElement) {
    static get properties() {
        return {
            itemDetails: { type: Array }
        };
    }

    _stateChanged(state) {
        this.itemDetails = state.item.itemDetails;
    }

    firstUpdated(){
        store.dispatch(fetchItemDetails(18090651));
    }

    render() {
        const { itemDetails } = this;

        return html`
      <!-- Styles -->
      ${PageStyles}
      ${ItemStyles}
      
      <!-- Content -->
      <section>
        <list-item
            id="${itemDetails.id}"
            title="${itemDetails.title}"
            points="${itemDetails.points}"
            user="${itemDetails.user}"
            time_ago="${itemDetails.time_ago}"
            comments_count="${itemDetails.comments_count}"
            url="${itemDetails.url}"
            domain="${itemDetails.domain || ''}"
            type="${itemDetails.type}"
        ></list-item>
        ${itemDetails.comments.length > 0 
            ? itemDetails.comments.map(detail => html`
                <item-comment
                    id="${detail.id}"
                    level="${detail.level}"
                    user="${detail.user}"
                    time_ago="${detail.time_ago}"
                    content="${detail.content}"
                ></item-comment>

                ${detail.comments.length > 0 
                    ? detail.comments.map(subComment => html`
                        <div class="sub-comments">
                            <item-comment
                                id="${subComment.id}"
                                level="${subComment.level}"
                                user="${subComment.user}"
                                time_ago="${subComment.time_ago}"
                                content="${subComment.content}"
                            ></item-comment>
                        </div>
                    `)
                    : ''
                }
            `)
            : '' 
        }        
      </section>
    `;
    }
}
