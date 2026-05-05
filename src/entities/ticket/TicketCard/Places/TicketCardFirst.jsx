import PolygonSvg from '@icons/polygon.svg?react';
import RubSvg from '@icons/rub.svg?react';

import { formatPrice } from '@/shared/utils/formatePrice/formatePrice.js';

export const TicketCardFirst = ({ departure }) => {
  const firstClass = departure?.price_info?.first;
  const seatsInfo = departure?.available_seats_info?.first ?? 0;

  const prices = [
    firstClass?.price,
    firstClass?.top_price,
    firstClass?.bottom_price,
  ].filter((p) => typeof p === 'number');

  const minPrice = prices.length ? Math.min(...prices) : null;


  return (
    <div className="ticket-card__flex">
      <p className="ticket-card__place-type">Люкс</p>

      <div className="ticket-card__places-count">
        <span>{seatsInfo}</span>

        <div className="ticket-card__places">
          <PolygonSvg className="ticket-card__places-icon" />

          <div className="ticket-card__places-item">
            <span>верхние</span>
            <div className="ticket-card__price">
              <span>{formatPrice(firstClass?.top_price)}</span>
              <RubSvg width={16} height={19}/>
            </div>
          </div>

          <div className="ticket-card__places-item">
            <span>нижние</span>
            <div className="ticket-card__price">
              <span>{formatPrice(firstClass?.bottom_price)}</span>
              <RubSvg width={16} height={19}/>
            </div>
          </div>
        </div>
      </div>

      <div className="ticket-card__price">
        от{' '}
        <span>{minPrice !== null ? formatPrice(minPrice) : '—'}</span>{' '}
        <RubSvg width={16} height={19}/>
      </div>
    </div>
  );
};