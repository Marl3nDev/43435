import RubSvg from '@icons/rub.svg?react';
import ArrowLeftSvg from '@icons/ticket-arrow-left-2.svg?react';
import ArrowRightSvg from '@icons/ticket-arrow-right-2.svg?react';
import {  useCallback } from 'react';
import {  useSelector } from 'react-redux';

import { TicketCounts } from './TicketCounts/TicketCounts.jsx';
import { TicketInfo } from './TicketInfo.jsx';
import { TicketWagon } from './TicketWagon/TicketWagon.jsx';

import {
  priceSelector,
} from '@/entities/ticket/model/selectors.jsx';
import { useTickets } from '@/shared/hooks/useTickets/useTickets.jsx';
import { Button } from '@/shared/ui/Button/Button.jsx';
import { cn } from '@/shared/utils/cn/cn.js';


export const TicketRoute = ({
                              activeTicket,
                              arrival,
                              passengers,
                              setPassengers,
                            }) => {


  const price = useSelector((state) =>
    priceSelector(state, arrival ? 'arrival' : 'departure')
  );

  const { searchTicketsWithParams, params } = useTickets();



  const handleBack = useCallback(() => {
    const newParams = { ...params };
    delete newParams.id;
    searchTicketsWithParams(newParams);
  }, [params, searchTicketsWithParams]);

  if (!activeTicket) return null;

  return (
    <div
      className={cn('ticket__route', [], {
        'ticket__route--arrival': arrival,
      })}
    >
      <div className="ticket__top">
        {arrival ? <ArrowLeftSvg/> : <ArrowRightSvg/>}

        <Button variant="black-ghost" onClick={handleBack}>
          Выбрать другой поезд
        </Button>
      </div>

      <TicketInfo activeTicket={activeTicket} arrival={arrival} />

      <TicketCounts
        arrival={arrival}
        passengers={passengers}
        setPassengers={setPassengers}
      />

      <TicketWagon
        arrival={arrival}
        passengers={passengers}
      />

      {price > 0 && (
        <div className="ticket__price">
          {price}
          <RubSvg width={14} height={17}/>
        </div>
      )}
    </div>
  );
};