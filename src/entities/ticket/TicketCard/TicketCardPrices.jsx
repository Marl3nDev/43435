import { TicketServices } from '../TicketServices/TicketServices.jsx';
import { TicketCardFirst } from './Places/TicketCardFirst.jsx';
import { TicketCardFourth } from './Places/TicketCardFourth.jsx';
import { TicketCardSecond } from './Places/TicketCardSecond.jsx';
import { TicketCardThird } from './Places/TicketCardThird.jsx';

import { useTickets } from '@/shared/hooks/useTickets/useTickets.jsx';
import { Button } from '@/shared/ui/Button/Button.jsx';


export const TicketCardPrices = ({ departure, children }) => {
  const { searchTicketsWithParams, params } = useTickets()
  const handleClick = () => {
    searchTicketsWithParams({
      id: departure._id,
      ...params,
    });
    window.scrollTo({ top: 600, behavior: 'instant' });
  }
  return (
    <div className={'ticket-card__right'}>
      <div className={'ticket-card__prices'}>
        {departure.available_seats_info.fourth && <TicketCardFourth departure={departure}/>}
        {departure.available_seats_info.third && <TicketCardThird departure={departure}/>}
        {departure.available_seats_info.second && <TicketCardSecond departure={departure}/>}
        {departure.available_seats_info.first && <TicketCardFirst departure={departure}/>}
      </div>
      <TicketServices className={'ticket-card__services'} {...departure} />
      {children ? children :
        <Button className={'ticket-card__button'} onClick={handleClick} size={'full-s'} color={'white'}>Выбрать
          места</Button>}
    </div>
  );
};
