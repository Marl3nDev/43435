import { useDispatch, useSelector } from 'react-redux';

import { activeSeatsSelector } from '@/entities/ticket/model/selectors.jsx';
import { ticketActions } from '@/entities/ticket/model/ticketSlice.js';
import { FirstSchema } from '@/features/Schema/FirstSchema/FirstSchema.jsx';
import { FourthSchema } from '@/features/Schema/FourthSchema/FourthSchema.jsx';
import { SecondSchema } from '@/features/Schema/SecondSchema/SecondSchema.jsx';
import { ThirdSchema } from '@/features/Schema/ThirdSchema/ThirdSchema.jsx';

export const TicketSchema = ({ wagon, type, passengers, arrival }) => {
  const dispatch = useDispatch();
  const activeSeats = useSelector((state) => activeSeatsSelector(state, arrival && 'arrival'));

  const { adults, children } = activeSeats.reduce(
    (acc, seat) => {
      if (seat.person_info?.is_adult) acc.adults++;
      if (seat.is_child) acc.children++;
      return acc;
    },
    { adults: 0, children: 0 }
  );


  const isChildren = passengers.children !== children;
  const mode = (passengers.adult !== adults &&
  passengers.adult !== adults
  && passengers.children > 0
  && isChildren ? 'dropdown' : 'direct')

  const onSeatClick = (i, p, type, isRemoving) => {
    if (activeSeats.length === (Number(passengers.adult) + Number(passengers.children)) && !isRemoving) return;
    let t = type;

    if (mode === 'direct' && isChildren) t = 'child'


    dispatch(ticketActions.updateSeats(
      { index: i, name: wagon.coach.name, type: t,  id: wagon.coach._id, price: p, direction: arrival && 'arrival' }))
  }

  return (
    <div className={'ticket__schema'}>
      {type === 'fourth' &&
        <FourthSchema
          selectionMode={mode}
          onSeatClick={onSeatClick} wagon={wagon}/>}
      {type === 'third' &&
        <ThirdSchema selectionMode={mode}
                     onSeatClick={onSeatClick} passengers={passengers} wagon={wagon}/>}
      {type === 'second' &&
        <SecondSchema selectionMode={mode}
                      onSeatClick={onSeatClick} passengers={passengers} wagon={wagon}/>}
      {type === 'first' &&
        <FirstSchema selectionMode={mode}
                     onSeatClick={onSeatClick} passengers={passengers} wagon={wagon}/>}
    </div>
  );
};
