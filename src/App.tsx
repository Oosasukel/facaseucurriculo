import React, { useState } from 'react';
import Routes from './routes';
import GlobalStyle from './styles/global';
import { ThemeNames, themes } from './styles/themes/index';
import { ThemeProvider } from 'styled-components';
import { Theme } from './styles/themes/theme.model';
import usePersistedState from './utils/usePersistedState';

function App() {
  const [themeName, setThemeName] = usePersistedState<ThemeNames>(
    'themeName',
    'light'
  );
  const [theme, setTheme] = useState<Theme>(themes[themeName]);

  const handleSetTheme = (selectedThemeName: ThemeNames) => {
    const newTheme = themes[selectedThemeName];

    setThemeName(selectedThemeName);
    setTheme(newTheme);
  };

  return (
    <ThemeProvider theme={{ ...theme, setTheme: handleSetTheme }}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
