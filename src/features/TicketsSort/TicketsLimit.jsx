import { useTickets } from '@/shared/hooks/useTickets/useTickets.jsx';
import { cn } from '@/shared/utils/cn/cn.js'

export const TicketsLimit = () => {
  const { params, searchTicketsWithParams } = useTickets();
  const handleToggle = (num) => {
    searchTicketsWithParams({
      ...params,
      limit: num,
    });
  };
  return (
    <div className={'tickets-sort__limit'}>
      <span>  показать по: </span>
      <button className={cn('tickets-sort__limit-button', [], {
        'tickets-sort__limit-button--active': (Number(params.limit) || 5) === 5
      })} onClick={() => handleToggle(5)}>
        5
      </button>
      <button className={cn('tickets-sort__limit-button', [], {
        'tickets-sort__limit-button--active': Number(params.limit) === 10
      })} onClick={() => handleToggle(10)}>
        10
      </button>
      <button className={cn('tickets-sort__limit-button', [], {
        'tickets-sort__limit-button--active': Number(params.limit) === 20
      })} onClick={() => handleToggle(20)}>
        20
      </button>
    </div>
  );
};
