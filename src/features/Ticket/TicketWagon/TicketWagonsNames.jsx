import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { seatsSelector } from '@/entities/ticket/model/selectors.jsx';
import { cn } from '@/shared/utils/cn/cn.js';

export const TicketWagonsNames = ({ activeWagons,activeType, setActiveWagons }) => {
  const seats = useSelector(seatsSelector);

  const wagonsByType = useMemo(() => {
    return seats.reduce((acc, { coach }) => {
      if (!acc[coach.class_type]) acc[coach.class_type] = [];
      acc[coach.class_type].push(coach);
      return acc;
    }, {});
  }, [seats]);

  const handleClick = (name) => {
    if (activeWagons.includes(name)) {
      setActiveWagons(activeWagons.filter(item => item !== name));
    } else {
      setActiveWagons([...activeWagons, name]);
    }
  };

  return (
    <div className="ticket__wagons">
      <span>Вагоны</span>

      {wagonsByType[activeType]?.map(({ name }) => (
        <button
          key={name}
          className={cn('ticket__wagons-button', [], {
            'ticket__wagons-button--active': activeWagons.includes(name),
          })}
          onClick={() => handleClick(name)}
        >
          {name}
        </button>
      ))}

      <p className="ticket__wagons-text">
        Нумерация вагонов начинается с головы поезда
      </p>
    </div>
  );
};
