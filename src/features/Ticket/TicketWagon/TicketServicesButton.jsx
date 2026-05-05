import PolygonSvg from '@icons/polygon-3.svg?react'

import { cn } from '@/shared/utils/cn/cn.js'
export const TicketServicesButton = ({ disabled, icon:Icon, children, active, onClick }) => {


  return (
    <div className={'ticket__services-wrapper'}>
      <button className={cn('ticket__services-button', [], {
        'ticket__services-button--active': active,
      })} onClick={onClick} disabled={disabled}>
        {Icon && <Icon/>}
      </button>
      <div className={'ticket__tooltip'}>
        <PolygonSvg className={'ticket__tooltip-svg'} width={14} height={7}/>
        {children}
      </div>
    </div>
  );
};
