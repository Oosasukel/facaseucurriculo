import 'styled-components';
import { Theme } from './themes/theme.model';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    setTheme: (theme: Theme) => void;
  }
}
