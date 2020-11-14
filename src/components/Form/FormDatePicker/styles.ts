import styled from 'styled-components';

export const InputContainer = styled.div`
  .react-datepicker-wrapper {
    .react-datepicker__input-container {
      input {
        width: 105px;

        font-size: 1rem;
        height: 32px;
        padding: 0 8px;
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
    }
  }
`;