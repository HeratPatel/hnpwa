import { LitElement, html } from '@polymer/lit-element';
import { CommentsStyle } from './styles';

export class ItemComment extends LitElement {
    constructor(){
        super();
        this.collapsed = false;
        this.collapseString = '[–]';
        this.collapseTitle = 'Hide comments';
        this.commentThreadSize = 0;
    }

    static get properties(){
        return {
            id: {type: Number},
            level: {type: Number},
            user: {type: String},
            time_ago: {type: String},
            content: {type: String},
        };
    }

    toggleCollapse() {
        this.collapsed = !this.collapsed;        
        this.collapseString = this.collapsed ? '[+]' : '[–]';        
    }

    render(){
        const { id, user, time_ago, content, collapseString, collapsed } = this;

        return html`            
            ${CommentsStyle}
            
            <div class="header">
                <button class="toggle" @click="${this.toggleCollapse}" title="comment_collapse">${collapseString}</button>
                <a href="/user/${user}">${user}</a>
                <a href="/item/${id}">${time_ago}</a>  
            </div>
            <div class="comment" .innerHTML="${content}" .hidden="${collapsed}"></div>            
        `;
    }
}