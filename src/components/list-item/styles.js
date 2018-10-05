import { html } from '@polymer/lit-element';

export const ListItemStyle = html`
    <style>
        .list-item-container {
            display: flex;
            flex-direction: column;            
            padding: 20px;
            border-radius: 5px; 
            border: 1px solid var(--app-primary-color);            
        }

        .list-item-count {            
            margin-right: 20px;
            font-size: 30px;
            color: var(--app-dark-text-color);
        }

        .list-item-title-container {
            display: flex;
            justify-content: flex-start;
            align-items: center;
        }

        .list-item-title-container a {
            font-size: 22px;
            text-decoration: none;
            color: var(--app-primary-color);
            margin-right: 10px;
        }

        .list-item-title-container span {
            color: #666;
            font-size: 14px;
        }

        .list-item-information {
            display: flex;
            justify-content: space-between;
            font-size: 14px;
            margin-top: 10px;
        }

        .list-item-information span {
            display: flex;
            align-items: center;
        }

        .list-item-information span svg {
            height: 15px;
            width: 15px;
            margin-right: 5px;
        }        
    </style>
`;