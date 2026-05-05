import PolygonSvg from '@icons/polygon.svg?react';
import RubSvg from '@icons/rub.svg?react';

import { formatPrice } from '@/shared/utils/formatePrice/formatePrice.js';

export const TicketCardThird = ({ departure }) => {
  const thirdClass = departure?.price_info?.third;
  const seatsInfo = departure?.available_seats_info?.third ?? 0;

  const prices = [
    thirdClass?.top_price,
    thirdClass?.bottom_price,
    thirdClass?.side_price,
  ].filter((p) => typeof p === 'number');

  const minPrice = prices.length ? Math.min(...prices) : null;


  return (
    <div className="ticket-card__flex">
      <p className="ticket-card__place-type">Плацкарт</p>

      <div className="ticket-card__places-count">
        <span>{seatsInfo}</span>

        <div className="ticket-card__places">
          <PolygonSvg className="ticket-card__places-icon" />

          <div className="ticket-card__places-item">
            <span>верхние</span>
            <div className="ticket-card__price">
              <span>{formatPrice(thirdClass?.top_price)}</span>
              <RubSvg width={16} height={19}/>
            </div>
          </div>

          <div className="ticket-card__places-item">
            <span>нижние</span>
            <div className="ticket-card__price">
              <span>{formatPrice(thirdClass?.bottom_price)}</span>
              <RubSvg width={16} height={19} />
            </div>
          </div>

          <div className="ticket-card__places-item">
            <span>боковые</span>
            <div className="ticket-card__price">
              <span>{formatPrice(thirdClass?.side_price)}</span>
              <RubSvg  width={16} height={19}/>
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