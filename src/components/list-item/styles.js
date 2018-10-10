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
      
        .title a {
            text-decoration: none;
        }
      
        .domain {
            padding-left: 4px;
            color: var(--detail-font-color);
        }        
        
        .meta {            
            padding: 8px 0;
            color: var(--detail-font-color);
            max-width: 600px;        
        }
      
        .user {
            color: var(--detail-font-color);
        }
       
        .item {
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

        .spacer {
            padding-right: .5em;
        }
    </style>
`;