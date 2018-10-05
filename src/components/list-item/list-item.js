import { LitElement, html } from '@polymer/lit-element';
import { ListItemStyle } from './styles';

class ListItem extends LitElement {
    static get properties() {
        return {
            id: {type: Number},
            title: {type: String},
            points: {type: Number},
            user: {type: String},
            time: {type: Number},
            time_ago: {type: String},
            comments_count: {type: Number},
            type: {type: String},
            url: {type: String},
            domain: {type: String}
        };
    }

    render() {
        const { 
            id, 
            title, 
            points, 
            user, 
            time, 
            time_ago, 
            comments_count, 
            type, 
            url, 
            domain 
        } = this;

        return html`
            <!-- Styles -->
            ${ListItemStyle}

            <!-- Content -->
            <div class='list-item-container'>
            
            </div>
        `;
    }
}

export default ListItem;