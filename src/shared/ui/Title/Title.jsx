import { cn } from '@/shared/utils/cn/cn.js';

import './Title.css'

export const Title = ({ children, className, h,variant='' }) => {
  const titleClassName = cn('title', [className], {
    ['title--' + variant]: variant.length > 0,
  });

  if(h === 4) return <h4 className={titleClassName} >
    {children}
  </h4>

  if(h === 5) return <h5 className={titleClassName} >
    {children}
  </h5>

  return (
    <h3 className={cn(titleClassName)}>
      {children}
    </h3>
  );
};
