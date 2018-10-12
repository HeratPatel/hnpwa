import { html } from '@polymer/lit-element';

export const CommentsStyle = html`
    <style>
        .header {
            padding: 8px 0;
        }

        .header > * {
            margin-right: .25rem;
            color: var(--detail-font-color);
        }

        a {
            font-size: 0.8rem;
        }

        .toggle {
            user-select: none;
            background-color: transparent;
            border: none;
            padding: 0;
        }

        .comment {
            border-bottom: var(--separator-border);
        }

        .comment > p {
            overflow-wrap: break-word;
            font-size: 0.8rem;
        }

        .comment pre {
            white-space: pre-line;
        }

        .comment > p:first-of-type {
            margin-top: 0;
        }        
    </style>
`;