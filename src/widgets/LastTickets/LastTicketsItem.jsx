import RubSvg from '@icons/rub.svg?react';

import { TicketServices } from '@/entities/ticket/TicketServices/TicketServices.jsx';
import { formatPrice } from '@/shared/utils/formatePrice/formatePrice.js';


export const LastTicketsItem = ({ departure }) => {
  return (<li className={'last-tickets__item'}>
      <div className={'last-tickets__direction'}>
        <div className={'last-tickets__from'}>
          <p className={'last-tickets__city'}>{departure.from.city.name}</p>
          <p className={'last-tickets__station'}>
            {departure.from.railway_station_name} <br /> вокзал
          </p>
        </div>
        <div className={'last-tickets__to'}>
          <p className={'last-tickets__city'}>{departure.to.city.name}</p>
          <p className={'last-tickets__station'}>
            {departure.to.railway_station_name} <br /> вокзал
          </p>
        </div>
      </div>
      <div className={'last-tickets__services'}>
        <TicketServices {...departure} />
        <div className={'last-tickets__price'}>
          <span>от</span>{' '}
          <span className={'last-tickets__price-value'}>{formatPrice(departure.min_price)}</span> {' '}
          <RubSvg />
        </div>
      </div>
    </li>
  );
};
