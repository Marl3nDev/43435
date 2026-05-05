import StepSvg from '@icons/step-icon.svg?react'

import { cn } from '@/shared/utils/cn/cn.js';


export const Step = ({ active, last, children }) => {
  return (
    <div className={cn('steps__item', [], {
      'steps__item--active': active,
    })}>
      {children}
      {!last && <StepSvg className="steps__icon"/>}
    </div>
  );
};
