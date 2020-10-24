import styled from 'styled-components';

export const FormExperienciaContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const CityContainer = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    margin-right: 0.5rem;
  }

  div + div {
    margin-right: 0;
  }
`;