import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex: 1;

  .iti {
    margin: 0.5rem 0;
  }

  .iti__selected-flag {
    border-radius: 20px 0 0 20px;
  }

  .iti__selected-dial-code {
    color: var(--color-form-input-color);
  }

  .iti__arrow {
    border-top: 4px solid var(--color-form-input-color);
  }

  .iti__arrow--up {
    border-bottom: 4px solid var(--color-form-input-color);
    border-top: none;
  }

  input.formInput {
    font-size: 1rem;
    height: 32px;
    padding-right: 8px;
    width: 100%;
    background: var(--color-form-input-background);
    border: 1px solid var(--color-form-input-border);
    border-radius: 20px;
    outline: none;
    color: var(--color-form-input-color);

    transition: border 0.2s;
    transition: color 0.2s;

    &:hover {
      border: 1px solid var(--color-form-input-border-hover);
    }

    &:focus {
      border: 1px solid var(--color-form-input-border-focus);
    }
  }
`;
