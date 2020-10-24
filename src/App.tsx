import React from 'react';
import Routes from './routes';
import GlobalStyle from './styles/global';
import { themes } from './styles/themes/index';
import { ThemeProvider } from 'styled-components';
import { Theme } from './styles/themes/theme.model';
import usePersistedState from './utils/usePersistedState';

function App() {
  const [theme, setTheme] = usePersistedState<Theme>('theme', themes.light);

  const handleSetTheme = (selectedTheme: Theme) => {
    setTheme(selectedTheme);
  };

  return (
    <ThemeProvider theme={{ ...theme, setTheme: handleSetTheme }}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
