import { useState, useRef, useEffect } from 'react';

import './Select.css'
import { cn } from '@/shared/utils/cn/cn.js'

export function Select({
  buttonClass,
                         className,
                         options = [],
                         value,
                         onChange,
                         placeholder = 'Выбери'
                       }) {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!ref.current?.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const filteredOptions = options.filter((item) => item !== value);

  return (
    <div className={cn('select', [className], {
      'select--open': open,
    })} ref={ref}>
      <button
        type={'button'}
        onClick={() => setOpen((prev) => !prev)}
        className={cn('select__button', [buttonClass])}
      >
        {value || placeholder}
      </button>

      {open && filteredOptions.length > 0 && (
        <ul
          className={'select__list'}

        >
          {filteredOptions.map((item) => (
            <li className={'select__item'}>

            <button
              className={'select__item-button'}
              key={item}
              onClick={() => {
                onChange(item);
                setOpen(false);
              }}
            >
              {item}
            </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}