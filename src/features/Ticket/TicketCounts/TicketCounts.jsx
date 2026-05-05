import { useDispatch, useSelector } from 'react-redux';

import { TicketCountsInput } from './TicketCountsInput.jsx';

import { activeSeatsSelector } from '@/entities/ticket/model/selectors.jsx';
import { ticketActions } from '@/entities/ticket/model/ticketSlice.js';
import { Title } from '@/shared/ui/Title/Title.jsx';

export const TicketCounts = ({ passengers = {}, setPassengers, arrival }) => {

  const dispatch = useDispatch();

  const activeSeats = useSelector((state) => activeSeatsSelector(state, arrival ? 'arrival' : 'departure'));

  const handleChange = (e, name, max) => {

    if (activeSeats.length > 0) {
      dispatch(
        ticketActions.reset({
          direction: arrival ? 'arrival' : 'departure',
        })
      );
    }
    let value = e.target.value.replace(/\D/g, '');
    if (value === '') {
      setPassengers(v => ({
        ...v,
        [name]: 0
      }));
      return;
    }

    const num = Number(value);

    if (num > max) return;

    setPassengers(v => ({
      ...v,
      [name]: num
    }));
  };

  return (
    <>
      <Title h={3} variant={'bold'} className="ticket__item-title">
        Количество билетов
      </Title>

      <div className="ticket__counts">

        <TicketCountsInput
          value={`Взрослых — ${passengers.adult ?? 0}`}
          onChange={(e) => handleChange(e, 'adult', 5)}
        >
          {passengers.adult !== 5 && (
            <p className="ticket__counts-text">
              Можно добавить {passengers.adult > 0 && 'еще '}
              {5 - (passengers.adult ?? 0) || 5} пассажиров
            </p>
          )}
        </TicketCountsInput>

        <TicketCountsInput
          value={`Детских — ${passengers.children ?? 0}`}
          onChange={(e) => handleChange(e, 'children', 3)}
        >
          {passengers.children !== 3 && (
            <p className="ticket__counts-text">
              Можно добавить {passengers.children > 0 && 'еще '}
              {3 - (passengers.children ?? 0) || 3} детей до 10 лет.
              Свое место в вагоне, как у взрослых, но дешевле на 50–65%
            </p>
          )}
        </TicketCountsInput>

        <TicketCountsInput
          value={`Детских «без места» — ${passengers.children_without_place ?? 0}`}
          onChange={(e) =>
            handleChange(
              e,
              'children_without_place',
              passengers.adult ?? 0
            )
          }
        />

      </div>
    </>
  );
};