import RubSvg from '@icons/rub.svg?react';

import { TicketServices } from './TicketServices.jsx';

import { formatPrice } from '@/shared/utils/formatePrice/formatePrice.js';

export const TicketWagonInfo = ({ wagon, arrival }) => {
  const coach = wagon?.coach;

  if (!coach) return null;

  const {
    name,
    available_seats,
    top_price,
    bottom_price,
    side_price,
  } = coach;

  const seatTypes = [
    { key: 'top', label: 'Верхние', price: top_price },
    { key: 'bottom', label: 'Нижние', price: bottom_price },
    { key: 'side', label: 'Боковые', price: side_price },
  ];


  return (
    <div className="ticket__wagon-info">
      <div className="ticket__wagon-name">
        {name}
        <span>вагон</span>
      </div>

      <div className="ticket__wagon-item">
        <p className="ticket__wagon-item-name">
          Места <span>{available_seats}</span>
        </p>

        {seatTypes.map(
          ({ key, label, price }) =>
            price > 0 && (
              <p key={key} className="ticket__wagon-place">
                {label}
              </p>
            )
        )}
      </div>

      <div className="ticket__wagon-item">
        <p className="ticket__wagon-item-name">Стоимость</p>

        {seatTypes.map(
          ({ key, price }) =>
            price > 0 && (
              <p key={key} className="ticket__wagon-price">
                {formatPrice(price)}
                <RubSvg width={14} height={17} />
              </p>
            )
        )}
      </div>

      <div className="ticket__wagon-item">
        <p className="ticket__wagon-item-name">
          Обслуживание
          <span className="ticket__fpk">ФПК</span>
        </p>

        <TicketServices wagon={wagon} arrival={arrival} />
      </div>
    </div>
  );
};