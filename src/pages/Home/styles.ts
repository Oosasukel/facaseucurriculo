import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr min-content;
  background-color: var(--color-background);
  padding: 0 2rem;

  transition: background 0.2s;
`;

export const HomeContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 1;
  width: 100%;
`;

export const Title = styled.h1`
  color: var(--color-h1);
  font-size: 2rem;
  transition: color 0.2s;
  margin: 0.5rem;
  margin-bottom: 1.5rem;
`;