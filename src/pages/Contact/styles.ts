import styled from 'styled-components';

export const ContactContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr min-content;
  background-color: var(--color-background);
  padding: 0 2rem;
  
  transition: background 0.2s;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
`;

export const Title = styled.h1`
  color: var(--color-h1);
  font-size: 2rem;
  transition: color 0.2s;
  margin: 0.5rem;
  margin-bottom: 1.5rem;
`;

export const AuthorContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 1rem 0;

  @media (max-width: 680px){
    flex-direction: column;
    align-items: center;
  }
`;

export const AuthorImage = styled.img`
  width: 280px;
  height: 280px;
  border-radius: 50%;
  border: 1px solid var(--color-form-border);
  margin-right: 2rem;

  @media (max-width: 680px){
    margin: 0;
    margin-bottom: 1rem;
  }
`;

export const AuthorInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
`;

export const InfoLabel = styled.label`
  display: flex;
  flex-direction: column;
  color: var(--color-p);
  font-size: 1rem;
`;

export const InfoValue = styled.label`
  display: flex;
  flex-direction: column;
  color: var(--color-h1);
  font-size: 1.2rem;
  font-weight: 600;
`;

export const IconsContainer = styled.div`
  margin-top: 1rem;
  display: flex;
`;

export const LinkedinLink = styled.a`
  text-decoration: none;
  cursor: pointer;

  color: var(--color-form-p);

  transition: color 0.2s;

  &:hover {
    color: var(--color-primary);
  }
`;