import './Checkbox.css';
import CheckSvg from '@icons/checked.svg?react'

import { cn } from '@/shared/utils/cn/cn.js'
export const Checkbox = ({ label, checked, onClick }) => {

  return (
    <label className="checkbox">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onClick(e.target.checked)}
        className="checkbox__input"
      />

      <span className="checkbox__box">
        {checked && <CheckSvg />}
      </span>

      <span className={cn('checkbox__label', [], {
        'checkbox__label--checked': checked,
      })}>
        {label}
      </span>
    </label>
  );
};