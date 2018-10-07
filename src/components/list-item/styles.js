import { html } from '@polymer/lit-element';

export const ListItemStyle = html`
    <style>
        :host {
            display: block;
            font-size: var(--detail-font-size);
        }
      
        a {
            color: var(--app-dark-text-color);
        }
      
        .title, .domain {
            font-size: 1rem;
        }
      
        .title {
            text-decoration: none;
        }
      
        .domain {
            padding-left: 4px;
            color: var(--detail-font-color);
        }        
        
        .meta {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 8px 0;
            color: var(--detail-font-color);
            border-bottom: var(--separator-border);
        }

        .meta span {
            display: flex;
            align-items: center;
        }
      
        .user {
            color: var(--detail-font-color);
        }
       
        li {
            display: flex;
            flex-direction: column;
            padding: 8px 0;
            border-bottom: var(--separator-border);
            overflow-wrap: break-word;            
        }

        svg {
            width: 15px;
            height: 15px;
            margin-right: 5px;
        }
    </style>
`;