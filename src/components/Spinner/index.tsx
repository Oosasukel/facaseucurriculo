import React from 'react';

import { Loading, SpinnerContent } from './styles';

interface SpinnerProps {
  fontSize: number;
}

const Spinner: React.FC<SpinnerProps> = ({ fontSize }) => {
  return (
    <Loading>
      <SpinnerContent fontSize={fontSize} />
    </Loading>
  );
};

export default Spinner;
