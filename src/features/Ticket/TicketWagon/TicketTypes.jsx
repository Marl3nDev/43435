import CoupeSvg from '@icons/coupe-2.svg?react';
import LuxurySvg from '@icons/luxury-2.svg?react';
import PlackartSvg from '@icons/plackart-2.svg?react';
import SitingSvg from '@icons/siting-2.svg?react';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { seatsSelector } from '@/entities/ticket/model/selectors.jsx';
import { cn } from '@/shared/utils/cn/cn.js';

const WAGON_TYPES = [
  { key: 'fourth', label: 'Сидячий', icon: SitingSvg },
  { key: 'third', label: 'Плацкарт', icon: PlackartSvg },
  { key: 'second', label: 'Купе', icon: CoupeSvg },
  { key: 'first', label: 'Люкс', icon: LuxurySvg },
];

export const TicketTypes = ({ setActiveType, activeType, setActiveWagons, arrival }) => {
  const seats = useSelector((state) =>
    seatsSelector(state, arrival && 'arrival'));

  const availableTypes = useMemo(() => {
    return new Set(seats.map(({ coach }) => coach.class_type));
  }, [seats]);

  const typeButtonClass = (type) =>
    cn('ticket__types-button', [], {
      'ticket__types-button--active': activeType === type,
    });
  return (
    <div className="ticket__types">
      <div className="ticket__types-buttons">
        {WAGON_TYPES.map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            className={typeButtonClass(key)}
            onClick={() => {
              setActiveType(key);
              setActiveWagons([]);
            }}
            disabled={!availableTypes.has(key)}
          >
            {Icon && <Icon/>}
            {label}
          </button>
        ))}
      </div>

    </div>
  );
};
