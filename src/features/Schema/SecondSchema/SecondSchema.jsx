import { useEffect, useRef, useState, useMemo } from 'react';

import { SchemaName } from '../SchemaName.jsx';

import secondSchema from '@/shared/assets/images/schema.svg';
import { cn } from '@/shared/utils/cn/cn.js';

import './SecondSchema.css';

export const SecondSchema = ({
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

  // 💡 цена тултипа (оставляем memo — тут он оправдан)
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

  // 💡 найденное активное место
  const activeSeatData = useMemo(() => {
    return currentSeats.find((s) => s.index === activeSeat);
  }, [currentSeats, activeSeat]);

  // 💡 закрытие при клике вне схемы
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

  return (
    <div className="second-schema" ref={containerRef}>
      <img
        className="second-schema__img"
        src={secondSchema}
        alt="compartment"
      />

      <SchemaName name={coach.name} />

      <ul className="second-schema__scheme">
        {currentSeats.map((seat) => (
          <li
            key={seat.index}
            className={cn(
              `second-schema__seat second-schema__seat_${seat.index}`,
              [],
              {
                'second-schema__seat_available': seat.available,
                'second-schema__seat_active': seat.isActive,
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