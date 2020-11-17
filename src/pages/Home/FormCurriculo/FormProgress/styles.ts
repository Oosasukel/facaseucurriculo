import styled from 'styled-components';

export const ProgressBarContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 24px;
  margin-top: 0.5rem;
  align-items: center;
`;

export const ProgressBarTotal = styled.div`
  background-color: var(--color-form-border);
  width: 100%;
  height: 5px;
  margin: 0 0.5rem;

  transition: background-color 0.2s;
`;

export const ProgressBarValue = styled.div`
  background-color: var(--color-primary);
  height: 100%;

  transition: width 0.5s;
`;

export const ProgressBarIconsContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

interface IconContainerProps {
  selected?: boolean;
}

export const IconContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 30px;
  background-color: ${({ selected }: IconContainerProps) =>
    selected ? 'var(--color-primary)' : 'var(--color-form-border)'};
  border-radius: 50%;

  transition: background-color 0.2s;

  svg {
    transition: color 0.2s;
  }
`;
