import React from 'react';
import { Button } from './styles';

const FormButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (
  props
) => {
  return <Button {...props}>{props.children}</Button>;
};

export default FormButton;
