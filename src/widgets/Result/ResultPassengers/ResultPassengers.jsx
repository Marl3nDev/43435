import RubSvg from '@icons/rub.svg?react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { ResultPassengersList } from '@/widgets/Result/ResultPassengers/ResultPassengersList.jsx';

import { activeSeatsSelector, priceSelector } from '@/entities/ticket/model/selectors.jsx';
import { PagePaths } from '@/shared/configs/routerConfig/routerConfig.jsx';
import { Button } from '@/shared/ui/Button/Button.jsx';
import { Title } from '@/shared/ui/Title/Title.jsx';

export const ResultPassengers = () => {
  const price = useSelector(priceSelector) || 0;
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(PagePaths.PASSENGERS);
  }
  const arrivalPrice = useSelector(
    (state) => priceSelector(state, 'arrival')
  ) || 0;

  const departureSeats = useSelector(activeSeatsSelector) || [];
  const arrivalSeats = useSelector(
    (state) => activeSeatsSelector(state, 'arrival')
  ) || [];

  const allSeats = [...departureSeats, ...arrivalSeats];

  const totalPrice = price + arrivalPrice;
  return (
    <div className="result__block">
      <div className="result__block-top">
        <Title className="result__title">Пассажиры</Title>
      </div>

      <div className="result__passengers">
        <ResultPassengersList seats={allSeats} />

        <div className="result__right">
          <div className="result__right-flex">
            <span>Всего</span>

            <div className="result__price">
              {totalPrice}
              <RubSvg width={20} height={24} />
            </div>
          </div>

          <Button variant="black-ghost" size="sm" onClick={handleClick}>
            Изменить
          </Button>
        </div>
      </div>
    </div>
  );
};
