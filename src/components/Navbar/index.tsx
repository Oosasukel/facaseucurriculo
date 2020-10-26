import React, { useContext } from 'react';
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
} from './styles';

// interface MenuButton {
//   name: string;
//   linkTo: string;
//   key: number;
// }

const Navbar: React.FC = () => {
  const { title, colors, setTheme } = useContext(ThemeContext);
  // const menuButtons: Array<MenuButton> = [
  //   {
  //     name: 'Início',
  //     linkTo: '/',
  //     key: 1
  //   },
  //   {
  //     name: 'Contato',
  //     linkTo: '/contact',
  //     key: 2,
  //   },
  // ];
  const location = useLocation();

  const handleSwitchChange = (checked: boolean) => {
    if (checked) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
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
          {/* {menuButtons.map((menuButton) => (
          <Link
            key={menuButton.key}
            style={{ textDecoration: 'none' }}
            to={menuButton.linkTo}
          >
            <NavbarButton selected={menuButton.linkTo === location.pathname}>
              {menuButton.name}
            </NavbarButton>
          </Link>
        ))} */}
          <Link style={{ textDecoration: 'none' }} to='/'>
            <NavbarButton selected={'/' === location.pathname}>
              <label>Início</label>
              <FaHome size={24} />
            </NavbarButton>
          </Link>

          <Link style={{ textDecoration: 'none' }} to='/contact'>
            <NavbarButton selected={'/contact' === location.pathname}>
              <label>Contato</label>
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
