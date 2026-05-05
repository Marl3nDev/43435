import { forwardRef } from 'react';

import { cn } from '@/shared/utils/cn/cn.js';

import './Input.css';

export const Input = forwardRef((
  {
    errorBorder,
    className,
    inputClass,
    children,
    error = '',
    variant = '',
    max,
    onlyNumber = false,
    onChange,
    ...others
  },
  ref
) => {
  const handleChange = (e) => {
    let value = e.target.value;

    if (onlyNumber) {
      value = value.replace(/\D/g, ''); // убираем всё кроме цифр
      e.target.value = value;
    }

    onChange?.(e);
  };

  return (
    <div
      className={cn('input-wrapper', [className], {
        ['input-wrapper--' + variant]: variant,
      })}
    >
      {error.length > 0 && <p className={'input__error'}>{error}</p>}

      <input
        ref={ref}
        type="text"
        className={cn('input', [inputClass], {
          'input--error': errorBorder,
        })}
        maxLength={max}
        onChange={handleChange}
        {...others}
      />

      {children}
    </div>
  );
});