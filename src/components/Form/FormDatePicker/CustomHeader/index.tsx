import { range } from 'lodash';
import React from 'react';

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

export const customHeader = ({
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
        changeYear(value as unknown as number)
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
