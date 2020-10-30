import styled from 'styled-components';

export const FooterContainer = styled.div`
  width: 100%;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0.5rem 0;
  width: 100%;

  a {
    text-decoration: none;
  }
`;

export const DonateLink = styled.a`
  display: flex;
  color: var(--color-form-p);

  transition: color 0.2s;

  &:hover {
    color: var(--color-primary);
  }
`;

export const Author = styled.label`
  display: flex;
  color: var(--color-form-p);
  transition: color 0.2s;
  margin-right: 1rem;

  cursor: pointer;

  &:hover {
    color: var(--color-primary);
  }
`;