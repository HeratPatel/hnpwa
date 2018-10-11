import { html } from '@polymer/lit-element';

export const FooterStyles = html`
    <style>
        footer {
            padding: 24px;
            background: var(--app-drawer-background-color);
            color: var(--app-drawer-text-color);
            text-align: center;
        }

        .pagination {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .pagination button {
            background: none;
            border: none;
        }

        .pagination button:hover {
            outline: none;
        }

        .pagination button svg {
            width: 30px;
            height: 30px;
        }
    </style>
`;
