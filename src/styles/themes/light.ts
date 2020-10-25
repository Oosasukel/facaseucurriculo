import { Theme } from './theme.model';
import { shade } from 'polished';

export const light: Theme = {
  title: 'light',

  colors: {
    background: '#f5f5f5',

    primary: '#006699',
    secondary: '#93abba',

    notSelected: '#93abba',
    selected: '#006699',

    divider: '#555',

    h1: '#191e1e',
    p: '#222',

    formH1: '#191e1e',
    formP: '#222',
    formBorder: '#aaa',
    formBackground: '#eee',
    formLabel: '#222',

    formInputBackground: '#f5f5f5',
    formInputBorder: '#aaa',
    formInputBorderHover: '#777',
    formInputBorderFocus: '#555',
    formInputColor: '#191e1e',

    formButtonBackground: '#006699',
    formButtonBackgroundHover: shade(0.2, '#006699'),
    formButtonBorder: shade(0.2, '#006699'),
    formButtonColor: '#fff',

    loading: '0,102,153',

    buttonRemove: '#C0003C',
    buttonAdd: '#008D73',

    progressIcon: '#fff',
  },
};
