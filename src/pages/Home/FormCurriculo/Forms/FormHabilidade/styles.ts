import styled from 'styled-components';

export const FormHabilidadeContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const NivelContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;

  label {
    margin-right: 1rem;
  }
`;

export const SkillCategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SkillCategoryTitle = styled.h2`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: var(--color-form-h1)
`;