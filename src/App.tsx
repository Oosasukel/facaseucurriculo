import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Routes from './routes';
import GlobalStyle from './styles/global';
import { ThemeNames, themes } from './styles/themes/index';
import { Theme } from './styles/themes/theme.model';
import usePersistedState, {
  UsePersistedStateResponse,
} from './utils/usePersistedState';
import { defaultLanguage } from './languages';

export const LanguageContext = React.createContext<
  UsePersistedStateResponse<string>
>(['pt', () => {}]);

function App() {
  const [themeName, setThemeName] = usePersistedState<ThemeNames>(
    'themeName',
    'light'
  );
  const [language, setLanguage] = usePersistedState(
    'language',
    defaultLanguage
  );
  const [theme, setTheme] = useState<Theme>(themes[themeName]);

  const handleSetTheme = (selectedThemeName: ThemeNames) => {
    const newTheme = themes[selectedThemeName];

    setThemeName(selectedThemeName);
    setTheme(newTheme);
  };

  return (
    <ThemeProvider theme={{ ...theme, setTheme: handleSetTheme }}>
      <LanguageContext.Provider value={[language, setLanguage]}>
        <GlobalStyle />
        <Routes />
      </LanguageContext.Provider>
    </ThemeProvider>
  );
}

export default App;
