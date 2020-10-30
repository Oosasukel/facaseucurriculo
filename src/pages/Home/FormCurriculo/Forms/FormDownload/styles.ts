import styled from 'styled-components';

export const FormDownloadContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  .inputsContainer {
    align-items: center;
  }
`;

export const LinkDownload = styled.a`
  text-decoration: none;

  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 160px;
  padding: 0 0.5rem;
  font-size: 1rem;
  height: 32px;
  margin: 0.5rem 0;
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

export const PreviewPDFMobile = styled.div`
  display: none;

  @media (max-width: 740px){
    display: flex;
    width: 245px;
    height: 344px;
    /* width: 100%; */
    /* max-width: 300px; */
    margin-bottom: 0.5rem;
    justify-content: center;
    align-items: center;
  }
`;