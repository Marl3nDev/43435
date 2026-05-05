import './ToggleContent.css'
import ToggleCloseButtonSvg from '@icons/toggle-close.svg?react'
import ToggleButtonSvg from '@icons/toggle.svg?react'
import { useState } from 'react';

import { cn } from '@/shared/utils/cn/cn.js';


export const ToggleContent = ({ icon:Icon, title, children }) => {
const [isVisible, setIsVisible] = useState(false);
const onToggle = () => setIsVisible(!isVisible);
  return (
    <>
      <div className={'toggle-content'}>
        {Icon && <Icon/>}
        {title}
        <button className={cn('toggle-content__button', [],{
          'toggle-content__button--visible': isVisible,
        })} onClick={onToggle}>
          {isVisible ? <ToggleCloseButtonSvg /> :<ToggleButtonSvg/>}
        </button>
      </div>
        {isVisible && children}

    </>
  );
};
