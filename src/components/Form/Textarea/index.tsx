import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { InputContainer } from './styles';

interface Props {
  name: string;
}

type TextareaProps = JSX.IntrinsicElements['textarea'] & Props;

const Textarea: React.FC<TextareaProps> = ({ name, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <InputContainer>
      <textarea ref={inputRef} defaultValue={defaultValue} {...rest} />
      <span style={{ color: '#f00' }}>{error}</span>
    </InputContainer>
  );
};

export default Textarea;
