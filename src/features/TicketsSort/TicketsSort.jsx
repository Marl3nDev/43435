
import { TicketsLimit } from './TicketsLimit.jsx';
import { TicketsSortSelect } from './TicketsSortSelect.jsx';

import { useTickets } from '@/shared/hooks/useTickets/useTickets.jsx';


import './TicketsSort.css'

export const TicketsSort = () => {
  const { data } = useTickets()

  return (
    <div className="tickets-sort">
      <div> Найдено: {data?.total_count}</div>
      <TicketsSortSelect/>
      <TicketsLimit/>
    </div>
  );
};
