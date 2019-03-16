import { css } from 'lit-element';

export const FooterStyles = css`
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

  .pagination span {
    font-weight: 600;
    font-size: 20px;
  }
`;
