import ArrowLeft from '@icons/arrow-orange-left.svg?react';
import ArrowRight from '@icons/arrow-orange-right.svg?react';
import PassengersSvg from '@icons/passengers.svg?react';
import ArrowGraphicLeft from '@icons/ticket-arrow-left.svg?react';
import ArrowGraphicRight from '@icons/ticket-arrow-right.svg?react';
import WhiteRubSvg from '@icons/white-rub.svg?react';

import { DetailsPassengers } from './DetailsPassengers.jsx';
import { DetailsRoute } from './DetailsRoute';
import { useTripDetails } from './hooks/useTripDetails';

import './Details.css';
import { Title } from '@/shared/ui/Title/Title.jsx';

export const Details = () => {
  const {
    departure,
    arrival,
    totalPrice,
    priceInfo
  } = useTripDetails();

  return (
    <div className="details">
      <Title className='details__main-title' variant={'medium'}>Детали поездки</Title>

      <DetailsRoute
        route={departure}
        title="Туда"
        icon={ArrowRight}
        ArrowIcon={ArrowGraphicRight}
      />

      <DetailsRoute
        arrival
        route={arrival}
        title="Обратно"
        icon={ArrowLeft}
        ArrowIcon={ArrowGraphicLeft}
      />

      <DetailsPassengers
        priceInfo={priceInfo}
        icon={PassengersSvg}
      />

      <div className='details__bottom'>
        <Title variant={'bold'}>Итог</Title>
        <div className='details__all-price'>
          {totalPrice}
          <WhiteRubSvg/>
        </div>
      </div>
    </div>
  );
};