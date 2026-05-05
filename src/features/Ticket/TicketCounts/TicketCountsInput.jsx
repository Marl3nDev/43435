import { useState } from 'react';

import { Input } from '@/shared/ui/Input/Input.jsx';
import { cn } from '@/shared/utils/cn/cn.js'
export const TicketCountsInput = (
  { value, onChange, children },
) => {

  const [focused, setFocused] = useState(false)
  return (
    <div className={cn('ticket__counts-item', [],
      { 'ticket__counts-item--focused': focused }
      )}>
      <Input   variant={'small'} value={value}
               onChange={onChange}
               onBlur={() => setFocused(false)}
               onFocus={() => setFocused(true)}
      />
      {children}
    </div>
  );
};
