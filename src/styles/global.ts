import { createGlobalStyle } from 'styled-components';
import { lighten } from 'polished';

export default createGlobalStyle`
  :root {
    --color-background: ${(props) => props.theme.colors.background};

    --color-primary: ${(props) => props.theme.colors.primary};
    --color-secondary: ${(props) => props.theme.colors.secondary};
    --color-primary-hover: ${(props) =>
      lighten(0.1, props.theme.colors.primary)};

    --color-not-selected: ${(props) => props.theme.colors.notSelected};
    --color-selected: ${(props) => props.theme.colors.selected};

    --color-divider: ${(props) => props.theme.colors.divider};

    --color-h1: ${(props) => props.theme.colors.h1};
    --color-p: ${(props) => props.theme.colors.p};

    --color-form-background: ${(props) => props.theme.colors.formBackground};
    --color-form-h1: ${(props) => props.theme.colors.formH1};
    --color-form-p: ${(props) => props.theme.colors.formP};
    --color-form-border: ${(props) => props.theme.colors.formBorder};
    --color-form-label: ${(props) => props.theme.colors.formLabel};

    --color-form-input-background: ${(props) => props.theme.colors.formInputBackground};
    --color-form-input-border: ${(props) => props.theme.colors.formInputBorder};
    --color-form-input-border-hover: ${(props) => props.theme.colors.formInputBorderHover};
    --color-form-input-border-focus: ${(props) => props.theme.colors.formInputBorderFocus};
    --color-form-input-color: ${(props) => props.theme.colors.formInputColor};
    
    --color-form-button-background: ${(props) => props.theme.colors.formButtonBackground};
    --color-form-button-background-hover: ${(props) => props.theme.colors.formButtonBackgroundHover};
    --color-form-button-border: ${(props) => props.theme.colors.formButtonBorder};
    --color-form-button-color: ${(props) => props.theme.colors.formButtonColor};
  
    --color-loading: ${(props) => props.theme.colors.loading};
    
    --color-button-remove: ${(props) => props.theme.colors.buttonRemove};
    --color-button-add: ${(props) => props.theme.colors.buttonAdd};
  
    --color-progress-icon: ${(props) => props.theme.colors.progressIcon};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *,
  input,
  button,
  textArea {
    font-family: Open sans, sans-serif;
  }

  html,
  body,
  #root {
    height: 100vh;
  }

  #root {
    display: grid;
    grid-template-rows: min-content 1fr;
    font-size: 16px;
  }
`;
