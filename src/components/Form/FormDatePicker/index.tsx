import React, { useEffect, useRef, useState } from 'react';
import { useField } from '@unform/core';
import DatePicker, { ReactDatePickerProps } from 'react-datepicker';
import { range } from 'lodash';

import { InputContainer } from './styles';

import 'react-datepicker/dist/react-datepicker.css';

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

  const handleChange = (date: Date | [Date, Date] | null) => {
    if (date) {
      setSelectedDate(date);
      onChange(date, undefined);
    }
  };

  const years = range(1920, new Date().getFullYear() + 1);
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const customHeader = ({
    date,
    changeYear,
    changeMonth,
    decreaseMonth,
    increaseMonth,
    prevMonthButtonDisabled,
    nextMonthButtonDisabled,
  }: {
    date: Date;
    changeYear(year: number): void;
    changeMonth(month: number): void;
    decreaseMonth(): void;
    increaseMonth(): void;
    prevMonthButtonDisabled: boolean;
    nextMonthButtonDisabled: boolean;
  }) => (
    <div
      style={{
        margin: 10,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
        {'<'}
      </button>
      <select
        value={date.getFullYear()}
        onChange={({ target: { value } }) =>
          changeYear((value as unknown) as number)
        }
      >
        {years.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <select
        value={months[date.getMonth()]}
        onChange={({ target: { value } }) => changeMonth(months.indexOf(value))}
      >
        {months.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
        {'>'}
      </button>
    </div>
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
