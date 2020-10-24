import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex: 1;

  input.formInput {
    font-size: 1rem;
    height: 32px;
    padding: 0 8px;
    width: 100%;
    background: var(--color-form-input-background);
    border: 1px solid var(--color-form-input-border);
    border-radius: 20px;
    outline: none;
    color: var(--color-form-input-color);

    transition: border 0.2s;

    &:hover {
      border: 1px solid var(--color-form-input-border-hover);
    }

    &:focus {
      border: 1px solid var(--color-form-input-border-focus);
    }
  }
`;