import React, { useEffect, useRef, useState } from 'react';
import { useField } from '@unform/core';
import DatePicker, { ReactDatePickerProps } from 'react-datepicker';

import { InputContainer } from './styles';

import 'react-datepicker/dist/react-datepicker.css';

interface Props {
  name: string;
}

type InputProps = Props & ReactDatePickerProps;

const MonthPicker: React.FC<InputProps> = ({ name, onChange, ...rest }) => {
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

  const handleChange = (date: Date | [Date, Date] | null) => {
    if (date) {
      setSelectedDate(date);
      onChange(date, undefined);
    }
  };

  return (
    <InputContainer>
      <DatePicker
        ref={inputRef}
        selected={selectedDate}
        onChange={handleChange}
        dateFormat='MM/yyyy'
        showMonthYearPicker
        {...rest}
      />
      <span style={{ color: '#f00' }}>{error}</span>
    </InputContainer>
  );
};

export default MonthPicker;
