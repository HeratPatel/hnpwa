import { LitElement, html } from '@polymer/lit-element';
import { ListItemStyle } from './styles';
// import { starIcon, userIcon, clockIcon, commentIcon } from '../../icons';

export class ListItem extends LitElement {
    static get properties() {
        return {
            id: { type: Number },
            title: { type: String },
            points: { type: Number },
            user: { type: String },
            time_ago: { type: String },
            comments_count: { type: Number },
            url: { type: String },
            domain: { type: String },
            type: { type: String }
        };
    }

    render() {
        const {
            id,
            title,
            points,
            user,
            time_ago,
            comments_count,
            url,
            domain,
            type
        } = this;

        return html`
            <!-- Styles -->
            ${ListItemStyle}
            
            <!-- Content -->
            <div class="item">
                <div class="title">
                    <a href=${url}>${title}</a>
                    ${domain && (type === 'link' || type === 'job') 
                        ? html`
                            <span class="domain">(${domain})</span>
                        `
                        : null  
                    }            
                </div>
                <div class="meta">
                    ${type !== 'job' ? 
                        html`
                            ${points} points by 
                            <a class="user" href="/user/${user}">${user}</a>
                        `
                        : null }                    
                    ${time_ago}
                    ${type !== 'job' && comments_count > 0 ?
                        html`
                            <span class="spacer">|</span>
                            <span><a href="/comments/${id}">${comments_count} comments</a></span>   
                        `
                        : null
                    }                    
                </div>
            </div>
        `;
    }
}