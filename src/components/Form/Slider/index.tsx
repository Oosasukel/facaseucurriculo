import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { InputContainer } from './styles';

interface Props {
  name: string;
}

type InputProps = JSX.IntrinsicElements['input'] & Props;

const Slider: React.FC<InputProps> = ({ name, ...rest }) => {
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
      <input
        type='range'
        ref={inputRef}
        defaultValue={defaultValue}
        autoComplete='n-off'
        min='0'
        max='100'
        {...rest}
        className='formInput'
      />
      <span style={{ color: '#f00' }}>{error}</span>
    </InputContainer>
  );
};

export default Slider;
