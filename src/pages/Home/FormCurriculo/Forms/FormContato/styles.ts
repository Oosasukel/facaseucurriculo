import styled from 'styled-components';

export const FormContatoContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const PhotoLabel = styled.label`
  display: flex;
  justify-self: center;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  height: 32px;
  width: min-content;
  white-space: nowrap;
  margin: 1rem 0;
  padding: 0 0.5rem;
  background: var(--color-form-button-background);
  border: 1px solid var(--color-form-button-border);
  border-radius: 20px;
  outline: none;
  color: var(--color-form-button-color);
  cursor: pointer;

  transition: background 0.2s;

  &:hover {
    background: var(--color-form-button-background-hover);
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
`;

export const ImagePreviewContainer = styled.div`
  position: relative;
  display: flex;
  margin-right: 1rem;
  border-radius: 50%;
  cursor: pointer;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(1.2);

    &::after {
      position: absolute;
      content: "Alterar";
      font-size: 16px;
      color: #000;
      left: 25px;
      top: 40px;
    }
  }
`;

export const ImagePreview = styled.img`
  height: 100px;
  width: 100px;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid var(--color-form-input-border);
`;