import React from 'react';
import { ProgressBar, ProgressBarContainer } from './styles';

interface Props {
  step: number;
}

const FormProgress: React.FC<Props> = ({ step }) => {
  return (
    <ProgressBarContainer>
      <ProgressBar />
    </ProgressBarContainer>
  );
};

export default FormProgress;
