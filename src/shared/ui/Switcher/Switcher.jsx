import { cn } from '@/shared/utils/cn/cn.js';

import './Switcher.css';

export const Switcher = ({ className, isActive, onClick }) => {
  return (
    <div className={cn('switcher', [className], {
      'switcher--active': isActive
    })} onClick={onClick}>
      <div className={'switcher__circle'}></div>
    </div>
  );
};
