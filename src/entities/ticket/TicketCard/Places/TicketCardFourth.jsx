import PolygonSvg from '@icons/polygon.svg?react';
import RubSvg from '@icons/rub.svg?react';

import { formatPrice } from '@/shared/utils/formatePrice/formatePrice.js';

export const TicketCardFourth = ({ departure }) => {
  const fourthClass = departure?.price_info?.fourth;
  const seatsInfo = departure?.available_seats_info?.fourth ?? 0;

  const prices = [
    fourthClass?.top_price,
    fourthClass?.bottom_price,
  ].filter((p) => typeof p === 'number');

  const minPrice = prices.length ? Math.min(...prices) : null;

  return (
    <div className="ticket-card__flex">
      <p className="ticket-card__place-type">Сидящий</p>

      <div className="ticket-card__places-count">
        <span>{seatsInfo}</span>

        <div className="ticket-card__places">
          <PolygonSvg className="ticket-card__places-icon" />

          <div className="ticket-card__places-item">
            <span>верхние</span>
            <div className="ticket-card__price">
              <span>{formatPrice(fourthClass?.top_price)}</span>
              <RubSvg  width={16} height={19}/>
            </div>
          </div>

          <div className="ticket-card__places-item">
            <span>нижние</span>
            <div className="ticket-card__price">
              <span>{formatPrice(fourthClass?.bottom_price)}</span>
              <RubSvg width={16} height={19} />
            </div>
          </div>
        </div>
      </div>

      <div className="ticket-card__price">
        от <span>{minPrice !== null ? formatPrice(minPrice) : '—'}</span>{' '}
        <RubSvg width={16} height={19} />
      </div>
    </div>
  );
};