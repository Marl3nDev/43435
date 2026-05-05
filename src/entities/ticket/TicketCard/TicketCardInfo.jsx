import ArrowRightSvg from '@icons/arrow-right.svg?react';
import TrainSvg from '@icons/train.svg?react';

import { Title } from '@/shared/ui/Title/Title.jsx';

export const TicketCardInfo = ({ departure }) => {
  return (<div className={'ticket-card__info'}>
      <TrainSvg />
      <Title className={'ticket-card__name'} h={4} variant={'medium'}>
        {departure.train.name}
      </Title>
      <div className={'ticket-card__direction'}>
        <span>{departure.from.city.name}</span> <ArrowRightSvg /> <br />
        <span>{departure.to.city.name}</span>
      </div>
    </div>
  );
};
