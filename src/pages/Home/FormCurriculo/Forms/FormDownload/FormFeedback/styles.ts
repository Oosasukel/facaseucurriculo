import styled from 'styled-components';

export const FeedbackContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  padding: 1rem;
  max-width: 300px;

  background: var(--color-form-background);

  form {
    width: 100%;
  }
`;

export const StarsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 1.5rem;

  svg {
    width: 100%;
    color: yellow;
    cursor: pointer;
  }
`;

export const ButtonSendFeedbackContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ThanksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  width: 300px;
`;