import { useEffect, useRef, useState, useMemo } from 'react';

import { SchemaName } from '../SchemaName.jsx';

import firstSchema from '@/shared/assets/images/schema.svg';
import { cn } from '@/shared/utils/cn/cn.js';


import './FirstSchema.css';

export const FirstSchema = ({
                              wagon,
                              onSeatClick,
                              selectionMode = 'direct',
                            }) => {
  const [activeSeat, setActiveSeat] = useState(null);
  const containerRef = useRef(null);

  const { coach, seats: currentSeats } = wagon;

  const {
    top_price,
    bottom_price,
    side_price,
    have_wifi,
    wifi_price,
    is_linens_included,
    linens_price,
  } = coach;

  const priceTooltip = useMemo(() => {
    const prices = [top_price, bottom_price, side_price].filter(
      (p) => typeof p === 'number' && p !== 0
    );

    const base = prices.length ? Math.min(...prices) : 0;

    return (
      base +
      (have_wifi ? wifi_price : 0) +
      (is_linens_included ? 0 : linens_price)
    );
  }, [
    top_price,
    bottom_price,
    side_price,
    have_wifi,
    wifi_price,
    is_linens_included,
    linens_price,
  ]);

  const activeSeatData = useMemo(() => {
    return currentSeats.find((s) => s.index === activeSeat);
  }, [currentSeats, activeSeat]);

  const handleSeatClick = (seat, e) => {
    e.stopPropagation();

    if (!seat.available) return;

    if (seat.isActive) {
      onSeatClick(seat.index, priceTooltip, 'adult', true);
      return;
    }

    if (selectionMode === 'direct') {
      onSeatClick(seat.index, priceTooltip, 'adult', false);
      return;
    }

    setActiveSeat((prev) =>
      prev === seat.index ? null : seat.index
    );
  };

  const handleSelect = (type) => {
    if (!activeSeatData) return;

    onSeatClick(activeSeatData.index, priceTooltip, type, false);

    setActiveSeat(null);
  };

  useEffect(() => {
    const handlePointerDown = (e) => {
      if (!containerRef.current) return;

      if (!containerRef.current.contains(e.target)) {
        setActiveSeat(null);
      }
    };

    document.addEventListener('pointerdown', handlePointerDown, true);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown, true);
    };
  }, []);

  return (
    <div className="first-schema" ref={containerRef}>
      <img className="first-schema__img" src={firstSchema} alt="lux" />

      <SchemaName name={coach.name} />

      <ul className="first-schema__scheme">
        {currentSeats.map((seat) => (
          <li
            key={seat.index}
            className={cn(
              `first-schema__seat first-schema__seat_${seat.index}`,
              [],
              {
                'first-schema__seat_available': seat.available,
                'first-schema__seat_active': seat.isActive,
              }
            )}
            onClick={(e) => handleSeatClick(seat, e)}
          >
            {seat.index}

            {selectionMode === 'dropdown' &&
              activeSeatData?.index === seat.index &&
              activeSeatData?.available && (
                <div className="seat-dropdown">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelect('adult');
                    }}
                  >
                    Взрослый
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelect('child');
                    }}
                  >
                    Ребёнок
                  </button>
                </div>
              )}
          </li>
        ))}
      </ul>
    </div>
  );
};