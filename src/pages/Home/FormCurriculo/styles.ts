import styled from 'styled-components';

export const FormContainer = styled.div`
  padding: 1rem;
  width: 100%;
  border-radius: 20px;
  border: 1px solid var(--color-form-border);
  background-color: var(--color-form-background);

  transition: border 0.2s;
  transition: background-color 0.2s;
`;

export const FormTitle = styled.h1`
  font-size: 1.5rem;
  color: var(--color-form-h1);
  margin-bottom: 1rem;

  transition: color 0.2s;
`;

export const FormParagraph = styled.p`
  font-size: 1rem;
  color: var(--color-form-p);
  margin-bottom: 1rem;

  transition: color 0.2s;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  flex: 1;

  input, textarea {
    margin: 0.5rem 0;
  }

  input[type="file"] {
    display: none;
  }

  @media (max-width: 740px){
    align-items: center;
  }
`;

export const CurriculoContainer = styled.div`
  display: flex;
  align-self: center;
  width: 50%;
  max-width: 50%;
  padding: 1rem;

  @media (max-width: 740px){
    display: none;
  }
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DatesContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const DateItemContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputLabel = styled.label`
  color: var(--color-form-label);
  font-size: 1rem;
  justify-self: flex-start;

  transition: color 0.2s;
`;

export const EmpregoContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 1rem;
`;

export const EmpregoItem = styled.div`
  display: flex;

  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--color-form-border);
  margin-bottom: 1rem;

  transition: border 0.2s;
`;

export const EmpregoInfo = styled.div`
  width: 100%;
`;

export const EmpregoEdit = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;
`;

export const ButtonRemoveContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonRemove = styled.button`
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
  font-size: 1rem;
  height: 32px;
  margin: 1rem 0;
  background: var(--color-form-button-background);
  border: 1px solid var(--color-form-button-border);
  border-radius: 20px;
  color: var(--color-form-button-color);
  cursor: pointer;

  transition: background 0.2s;
  transition: border 0.2s;
  transition: box-shadow 0.2s;

  &:hover {
    border: 1px solid var(--color-button-remove);
    background: var(--color-button-remove);
  }

  &:focus {
    outline: 0;

    border: 1px solid var(--color-button-remove);
    box-shadow: 0 0 10px var(--color-button-remove);
  }
`;

export const ButtonAddContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonAdd = styled.button`
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
  font-size: 1rem;
  height: 32px;
  margin: 1rem 0;
  background: var(--color-form-button-background);
  border: 1px solid var(--color-form-button-border);
  border-radius: 20px;
  color: var(--color-form-button-color);
  cursor: pointer;

  transition: background 0.2s;
  transition: border 0.2s;
  transition: box-shadow 0.2s;

  &:hover {
    border: 1px solid var(--color-button-add);
    background: var(--color-button-add);
  }

  &:focus {
    outline: 0;

    border: 1px solid var(--color-button-add);
    box-shadow: 0 0 10px var(--color-button-add);
  }
`;

export const AtualContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const AtualLabel = styled.label`
  color: var(--color-form-label);
  font-size: 0.8rem;

  transition: color 0.2s;
`;