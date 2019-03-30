import { css } from 'lit-element';

export const HeaderStyles = css`
  :host {
    /* header styles variables */
    --app-header-background-color: white;
    --app-header-text-color: var(--app-dark-text-color);
    --app-header-selected-color: var(--app-primary-color);

    /* drawer styles variables */
    --app-drawer-width: 256px;
    --app-drawer-background-color: #ffffff;
    --app-drawer-text-color: #78909c;
    --app-drawer-selected-color: purple;
  }

  [main-title] {
    font-family: "Pacifico";
    text-transform: lowercase;
    font-size: 30px;
    padding-right: 44px;
  }

  app-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    text-align: center;
    background-color: var(--app-header-background-color);
    color: var(--app-header-text-color);
    border-bottom: 1px solid #eee;
  }

  .toolbar-top {
    background-color: var(--app-header-background-color);
  }

  .toolbar-list {
    display: none;
  }

  .toolbar-list > a {
    display: inline-block;
    color: var(--app-header-text-color);
    text-decoration: none;
    line-height: 30px;
    padding: 4px 24px;
  }

  .toolbar-list > a[selected] {
    color: var(--app-header-selected-color);
    border-bottom: 4px solid var(--app-header-selected-color);
  }

  .menu-btn {
    background: none;
    border: none;
    fill: var(--app-header-text-color);
    cursor: pointer;
    height: 44px;
    width: 44px;
  }

  .drawer-list {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 24px;
    background: var(--app-drawer-background-color);
    position: relative;
  }

  .drawer-list > a {
    display: block;
    text-decoration: none;
    color: var(--app-drawer-text-color);
    line-height: 40px;
    padding: 0 24px;
  }

  .drawer-list > a[selected] {
    color: var(--app-drawer-selected-color);
  }

  .app-drawer-container {
    z-index: 999;
  }

  @media (min-width: 460px) {
    .toolbar-list {
      display: block;
    }

    .menu-btn {
      display: none;
    }

    [main-title] {
      padding-right: 0px;
    }
  }
`;
