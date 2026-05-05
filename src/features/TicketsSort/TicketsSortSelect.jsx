import { useMemo } from 'react';

import { useTickets } from '@/shared/hooks/useTickets/useTickets.jsx';
import { Select } from '@/shared/ui/Select/Select.jsx';

const selectValues = {
  'времени': 'date',
  'стоимости': 'price',
  'длительности': 'duration',
};

const reverseMap = Object.fromEntries(
  Object.entries(selectValues).map(([k, v]) => [v, k])
);

export const TicketsSortSelect = () => {
  const { params, searchTicketsWithParams } = useTickets();

  const value = useMemo(() => {
    return reverseMap[params.sort] || 'времени';
  }, [params.sort]);

  const handleChange = (val) => {
    searchTicketsWithParams({
      ...params,
      sort: selectValues[val],
    });
  };

  return (
    <div className="tickets-sort__select-wrapper">
      <span>сортировать по:</span>

      <Select
        className="tickets-sort__select"
        options={Object.keys(selectValues)}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};