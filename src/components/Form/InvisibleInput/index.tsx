import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { InputContainer } from './styles';

interface Props {
  name: string;
}

type InputProps = JSX.IntrinsicElements['input'] & Props;

const InvisibleInput: React.FC<InputProps> = ({ name, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField } = useField(name);

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
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
        className='formInput'
      />
    </InputContainer>
  );
};

export default InvisibleInput;
