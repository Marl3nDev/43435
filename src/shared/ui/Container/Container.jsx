import { cn } from '@/shared/utils/cn/cn.js';

import './Container.css'

export const Container = ({ className, children, row }) => {
  return (
    <div className={cn('container', [className], {
      'container--row': row,
    } )}>
      {children}
    </div>
  );
};
