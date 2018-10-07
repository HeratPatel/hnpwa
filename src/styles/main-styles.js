import { html } from '@polymer/lit-element';

export const MainStyles = html`
    <style>
        :host {        
            display: block;
            --app-primary-color: #E91E63;
            --app-secondary-color: #293237;
            --app-dark-text-color: var(--app-secondary-color);
            --app-light-text-color: white;
            --app-section-even-color: #f7f7f7;
            --app-section-odd-color: white;
            --detail-font-size: 0.75rem;
            --detail-font-color: #666;
            --separator-border: 1px solid #eee;
        }

        main {
            display: block;
        }

        .main-content {
            padding-top: 64px;
            min-height: 100vh;
        }

        .page {
            display: none;
        }

        .page[active] {
            display: block;
        }

        @media (min-width: 460px) {        
            .main-content {
                padding-top: 107px;
            }      
        }
    </style>
`;