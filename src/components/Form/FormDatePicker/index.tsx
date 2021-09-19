import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useField } from '@unform/core';
import DatePicker, { ReactDatePickerProps } from 'react-datepicker';

import { InputContainer } from './styles';

import 'react-datepicker/dist/react-datepicker.css';
import { customHeader } from './CustomHeader';

interface Props {
  name: string;
}

type InputProps = Props & ReactDatePickerProps;

const FormDatePicker: React.FC<InputProps> = ({ name, onChange, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);
  const [selectedDate, setSelectedDate] = useState(defaultValue);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'props.selected',
    });
  }, [fieldName, registerField]);

  const handleChange = useCallback(
    (date: Date | [Date, Date] | null) => {
      if (date) {
        setSelectedDate(date);
        onChange(date, undefined);
      }
    },
    [onChange]
  );

  return (
    <InputContainer>
      <DatePicker
        renderCustomHeader={customHeader}
        ref={inputRef}
        selected={selectedDate}
        onChange={handleChange}
        dateFormat='dd/MM/yyyy'
        {...rest}
      />
      <span style={{ color: '#f00' }}>{error}</span>
    </InputContainer>
  );
};

export default FormDatePicker;
