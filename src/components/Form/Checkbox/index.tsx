import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { InputContainer } from './styles';

interface Props {
  name: string;
}

type InputProps = JSX.IntrinsicElements['input'] & Props;

const Checkbox: React.FC<InputProps> = ({ name, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'checked',
    });
  }, [fieldName, registerField]);

  return (
    <InputContainer>
      <input
        ref={inputRef}
        checked={defaultValue}
        {...rest}
        type='checkbox'
        className='formInput'
      />
      <span style={{ color: '#f00' }}>{error}</span>
    </InputContainer>
  );
};

export default Checkbox;
