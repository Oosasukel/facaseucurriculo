import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
  font-size: 1rem;
  height: 32px;
  margin-top: 1rem;
  background: var(--color-form-button-background);
  border: 1px solid var(--color-form-button-border);
  border-radius: 20px;
  color: var(--color-form-button-color);
  cursor: pointer;

  transition: background 0.2s;

  &:hover {
    background: var(--color-form-button-background-hover);
  }

  &:focus {
    outline: 0;
  }
`;