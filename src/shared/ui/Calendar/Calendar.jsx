import CalendarNextSvg from '@icons/calendar-next.svg?react';
import CalendarPrevSvg from '@icons/calendar-prev.svg?react';
import CalendarSvg from '@icons/calendar.svg?react'
import { forwardRef } from 'react';
import DatePicker from 'react-datepicker';

import { cn } from '@/shared/utils/cn/cn.js';



import './Calendar.css';

const CustomButton = forwardRef(({ value, onClick, small }, ref) => (
  <div className="calendar__wrapper">
    <input
      ref={ref}
      type="text"
      value={value || ''}
      onClick={onClick}
      readOnly
      placeholder="ДД/ММ/ГГ"
      className={cn('calendar__input', [], {
        ['calendar__input--small']: small,
      })}
    />
    <CalendarSvg className="calendar__icon" />
  </div>
));

export const Calendar = ({ date, minDate, maxDate, setDate, small }) => {
  return (
    <DatePicker
      selected={date}
      onChange={setDate}
      minDate={minDate || new Date}
      maxDate={maxDate}
      customInput={<CustomButton small={small}/>}
      dateFormat="dd/MM/yyyy"
      renderCustomHeader={({
                             date,
                             decreaseMonth,
                             increaseMonth,
                             prevMonthButtonDisabled,
                             nextMonthButtonDisabled,
                           }) => (
        <div className="calendar__top">
          <button onClick={decreaseMonth} type={'button'} disabled={prevMonthButtonDisabled}>
            <CalendarPrevSvg/>
          </button>

          <div className="calendar__month">
            {date.toLocaleString('default', { month: 'long' })}
          </div>

          <button onClick={increaseMonth} type={'button'} disabled={nextMonthButtonDisabled}>
            <CalendarNextSvg/>
          </button>
        </div>
      )}
    />
  );
};