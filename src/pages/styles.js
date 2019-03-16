import { css } from 'lit-element';

export const PageStyles = css`
  :host {
    display: block;
    box-sizing: border-box;
  }

  section {
    padding: 24px;
    background: var(--app-section-odd-color);
  }

  section:nth-of-type(even) {
    background: var(--app-section-even-color);
  }

  h2 {
    font-size: 24px;
    text-align: center;
    color: var(--app-dark-text-color);
  }

  ul {
    padding-left: 0;
  }

  .user-details {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 460px) {
    h2 {
      font-size: 36px;
    }
  }
`;
