import styled from 'styled-components';

export const PreviewContainer = styled.div`
  position: relative;
`;

interface Preview {
  enabled?: boolean;
}

export const Preview = styled.canvas`
  display: ${({ enabled }: Preview) => (enabled ? 'flex' : 'none')};
  width: 100%;

  padding: 2px;
  border: 1px solid var(--color-form-border);
`;

export const NavigationContainer = styled.div`
  display: ${({ enabled }: Preview) => (enabled ? 'flex' : 'none')};
  position: absolute;
  width: 100%;
  bottom: 0;
  justify-content: center;
`;

export const NavigationItems = styled.div`
  display: flex;
  background: #3339;
  border-radius: 20px;
  margin-bottom: 1rem;
  justify-content: space-between;
  align-items: center;

  span {
    color: var(--color-form-button-color);
  }
`;

export const NavigationPagesButton = styled.button`
  display: flex;
  align-items: center;
  margin: 0.2rem;
  height: 20px;
  width: 20px;
  justify-content: center;
  align-items: center;
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

  svg {
    color: var(--color-form-button-color);
  }
`;
