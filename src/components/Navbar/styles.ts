import styled from 'styled-components';

import sunImage from '../../assets/images/sun.svg';
import moonImage from '../../assets/images/moon.svg';

export const NavbarContainer = styled.div`
`;

export const NavbarContent = styled.div`
  background-color: var(--color-background);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  transition: background 0.2s;

  .title {
    font-size: 2rem;
    font-weight: 700;
    color: var(--color-primary);
    text-decoration: none;
    transition: 0.2s;

    &:hover {
      color: var(--color-primary-hover);
    }
  }
`;

export const LogoContainer = styled.span`
  display: flex;
  padding: 0.25rem 0;

  svg {
    font-size: 48px;
    color: var(--color-primary);

    animation-name: shadow;
    animation-duration: 8s;
    animation-iteration-count: infinite;

    transition: 0.2s;

    @keyframes shadow {
      0% {
        filter: brightness(120%);
      }
      50% {
        filter: brightness(50%);
      }
      100% {
        filter: brightness(120%);
      }
    }

    &:hover {
      color: var(--color-primary-hover);
    }
  }

`;

export const SpaceButtons = styled.div`
  display: flex;
  align-items: center;

  .sun {
    .react-switch-handle:before {
      content: url(${sunImage});
      display: block;
      box-sizing: border-box;
      padding: 3px;
      font-size: 0;
    }
  }

  .moon {
    .react-switch-handle:before {
      content: url(${moonImage});
      display: block;
      box-sizing: border-box;
      padding: 3px;
      font-size: 0;
    }
  }

  .switch {
    padding: 0 0.5rem 0 1rem;
  }

  svg {
    display: none;
  }

  @media (max-width: 550px){
    svg {
      display: inline;
    }
    label {
      display: none;
    }
  }
`;

interface NavbarButtonProps {
  selected?: boolean;
}

export const NavbarButton = styled.div`
  font-size: 1.125rem;
  font-weight: 700;
  color: ${(props: NavbarButtonProps) =>
    props.selected ? 'var(--color-selected)' : 'var(--color-not-selected)'};
  padding: 0 1rem;
  display: flex;

  transition: color 0.2s;

  label {
    cursor: pointer;
  }

  &:hover {
    color: var(--color-primary-hover);
  }
`;

export const LanguagesContainer = styled.div`
  position: relative;
`;

export const CurrentLanguageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;

  cursor: pointer;

  &:hover {
    label {
      color: var(--color-primary-hover);
    }
  }
`;

export const LanguageIcon = styled.img`
  margin-right: 0.2rem;
`;

export const CurrentLanguageLabel = styled.label`
  font-size: 1rem;
  font-weight: 700;
  margin-right: 0.2rem;
  color: var(--color-not-selected);

  transition: color 0.2s;

  cursor: pointer;
`;

export const LanguageLabel = styled.span`
  font-size: 1rem;
  font-weight: 700;
  margin-right: 0.2rem;
  color: var(--color-not-selected);

  transition: color 0.2s;

  cursor: pointer;
`;

export const LanguagesListContainer = styled.ul`
  position: absolute;
  display: none;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 10px;
  left: 1rem;
  padding: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

  background: var(--color-form-background);

  &.open {
    display: flex;
  }
`;

export const LanguageItemContainer = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  &:hover {
    span {
      color: var(--color-primary-hover);
    }
  }
`;