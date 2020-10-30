import React, { useContext, useEffect, useState } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';
import { Link, useLocation } from 'react-router-dom';
import { FaAddressCard, FaFingerprint, FaHome } from 'react-icons/fa';

import {
  NavbarContainer,
  SpaceButtons,
  NavbarButton,
  LogoContainer,
  NavbarContent,
  CurrentLanguageContainer,
  LanguageIcon,
  LanguageLabel,
  LanguagesContainer,
  LanguagesListContainer,
  LanguageItemContainer,
  CurrentLanguageLabel,
} from './styles';

import { LanguageContext } from '../../App';
import { messages } from '../../languages';

// interface MenuButton {
//   name: string;
//   linkTo: string;
//   key: number;
// }

interface LanguagesInfo {
  [language: string]: {
    image: string;
    label: 'PortugueseLabel' | 'EnglishLabel';
  };
}

const languagesInfo: LanguagesInfo = {
  pt: {
    image: 'https://www.countryflags.io/br/shiny/24.png',
    label: 'PortugueseLabel',
  },
  en: {
    image: 'https://www.countryflags.io/us/shiny/24.png',
    label: 'EnglishLabel',
  },
};

const Navbar: React.FC = () => {
  const { title, colors, setTheme } = useContext(ThemeContext);
  const [language, setLanguage] = useContext(LanguageContext);
  const [labels, setLabels] = useState(messages[language]);
  const [openLanguages, setOpenLanguages] = useState(false);

  useEffect(() => {
    setLabels(messages[language]);
  }, [language]);

  const location = useLocation();

  const handleSwitchChange = (checked: boolean) => {
    if (checked) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  const handleSetLanguage = (newLanguage: string) => {
    setLanguage(newLanguage);
    setOpenLanguages(false);
  };

  return (
    <NavbarContainer>
      <NavbarContent>
        <Link to='/'>
          <LogoContainer>
            <FaFingerprint />
          </LogoContainer>
        </Link>

        <SpaceButtons>
          <LanguagesContainer
            onMouseEnter={() => setOpenLanguages(true)}
            onMouseLeave={() => setOpenLanguages(false)}
          >
            <CurrentLanguageContainer onClick={() => setOpenLanguages(true)}>
              <LanguageIcon src={languagesInfo[language].image} />
              <CurrentLanguageLabel>
                {labels[languagesInfo[language].label]}
              </CurrentLanguageLabel>
            </CurrentLanguageContainer>

            <LanguagesListContainer className={openLanguages ? 'open' : ''}>
              {language !== 'pt' && (
                <LanguageItemContainer onClick={() => handleSetLanguage('pt')}>
                  <LanguageIcon src={languagesInfo['pt'].image} />
                  <LanguageLabel>{labels.PortugueseLabel}</LanguageLabel>
                </LanguageItemContainer>
              )}
              {language !== 'en' && (
                <LanguageItemContainer onClick={() => handleSetLanguage('en')}>
                  <LanguageIcon src={languagesInfo['en'].image} />
                  <LanguageLabel>{labels.EnglishLabel}</LanguageLabel>
                </LanguageItemContainer>
              )}
            </LanguagesListContainer>
          </LanguagesContainer>

          <Link style={{ textDecoration: 'none' }} to='/'>
            <NavbarButton selected={'/' === location.pathname}>
              <label>{labels.NavbarHome}</label>
              <FaHome size={24} />
            </NavbarButton>
          </Link>

          <Link style={{ textDecoration: 'none' }} to='/contact'>
            <NavbarButton selected={'/contact' === location.pathname}>
              <label>{labels.NavbarContact}</label>
              <FaAddressCard size={24} />
            </NavbarButton>
          </Link>

          <Switch
            className={title === 'light' ? 'switch sun' : 'switch moon'}
            onChange={handleSwitchChange}
            checked={title === 'light' ? false : true}
            checkedIcon={false}
            uncheckedIcon={false}
            height={10}
            width={30}
            handleDiameter={22}
            offColor={shade(0.4, colors.background)}
            onColor={shade(0.4, colors.primary)}
            offHandleColor={colors.primary}
            onHandleColor={colors.primary}
          />
        </SpaceButtons>
      </NavbarContent>
    </NavbarContainer>
  );
};

export default Navbar;
