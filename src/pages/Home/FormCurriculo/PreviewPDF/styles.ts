import styled from 'styled-components';

interface Preview {
  enabled?: boolean;
}

export const Preview = styled.canvas`
  display: ${({enabled}: Preview) => enabled ? 'flex' : 'none' };
  width: 100%;

  padding: 2px;
  border: 1px solid var(--color-form-border);
`;