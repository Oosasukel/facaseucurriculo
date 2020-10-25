export interface Theme {
  title: string;

  colors: {
    background: string;

    primary: string;
    secondary: string;

    notSelected: string;
    selected: string;

    divider: string;

    h1: string;
    p: string;

    formH1: string;
    formP: string;
    formBorder: string;
    formBackground: string;
    formLabel: string;

    formInputBackground: string;
    formInputBorder: string;
    formInputBorderHover: string;
    formInputBorderFocus: string;
    formInputColor: string;

    formButtonBackground: string;
    formButtonBackgroundHover: string;
    formButtonBorder: string;
    formButtonColor: string;

    loading: string;

    buttonRemove: string;
    buttonAdd: string;

    progressIcon: string;
  };
}
