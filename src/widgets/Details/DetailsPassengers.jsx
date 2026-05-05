import RubSvg from '@icons/rub.svg?react';

import { Title } from '@/shared/ui/Title/Title.jsx';
import { ToggleContent } from '@/shared/ui/ToggleContent/ToggleContent.jsx';

export const DetailsPassengers = ({ icon, priceInfo }) => {
  return (
    <div className='details__block details__passengers'>
      <ToggleContent icon={icon} title={<Title variant={'bold'} className='details__title'>Пассажиры</Title>}>
        <div className='details__info'>

          {priceInfo.adults.count > 0 && (
            <div className='details__info-item'>
              <span>{priceInfo.adults.count} Взрослых</span>
              <div className='details__info-price'>
                {priceInfo.adults.price}
                <RubSvg/>
              </div>
            </div>
          )}

          {priceInfo.children.count > 0 && (
            <div className='details__info-item'>
              <span>{priceInfo.children.count} Ребенок</span>
              <div className='details__info-price'>
                {priceInfo.children.price}
                <RubSvg/>
              </div>
            </div>
          )
          }

        </div>
      </ToggleContent>
    </div>
  );
};