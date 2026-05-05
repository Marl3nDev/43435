import PolygonSvg from '@icons/polygon-4.svg?react'
import { useState, useRef, useEffect } from 'react';

import { cn } from '@/shared/utils/cn/cn.js';

import './SimpleSelect.css'

const capitalize = (str = '') =>
  str.charAt(0).toUpperCase() + str.slice(1);

export function SimpleSelect({
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

  const filteredOptions = options.filter(
    (item) => item.toLowerCase() !== (value || '').toLowerCase()
  );
  return (
    <div className={cn('simple-select', [className], {
      'simple-select--open': open,
    })} ref={ref}>
      <button
        type={'button'}
        onClick={() => setOpen((prev) => !prev)}
        className={cn('simple-select__button', [buttonClass])}
      >
        {capitalize(value) || placeholder}
        <PolygonSvg width={11} height={4} className="simple-select__polygon" />
      </button>

      {open && filteredOptions.length > 0 && (
        <ul
          className={'simple-select__list'}

        >
          {filteredOptions.map((item) => (
            <li className={'simple-select__item'}>

              <button
                className={'simple-select__item-button'}
                key={item}
                onClick={() => {
                  onChange(item);
                  setOpen(false);
                }}
              >
                {capitalize(item)}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}