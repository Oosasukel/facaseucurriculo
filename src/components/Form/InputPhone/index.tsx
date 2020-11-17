import React, { useEffect } from 'react';
import { useField } from '@unform/core';

import { InputContainer } from './styles';

interface Props {
  name: string;
  inputRef: React.RefObject<HTMLInputElement>;
}

type InputProps = JSX.IntrinsicElements['input'] & Props;

const InputPhone: React.FC<InputProps> = ({ name, inputRef, ...rest }) => {
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField, inputRef]);

  return (
    <InputContainer>
      <input
        ref={inputRef}
        defaultValue={defaultValue}
        autoComplete='n-off'
        {...rest}
        className='formInput'
      />
      <span style={{ color: '#f00' }}>{error}</span>
    </InputContainer>
  );
};

export default InputPhone;
