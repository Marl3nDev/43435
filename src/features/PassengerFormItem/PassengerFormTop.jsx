import CloseSvg from '@icons/close.svg?react';
import PassengerCloseSvg from '@icons/passenger-close.svg?react';
import PassengerOpenSvg from '@icons/passenger-open.svg?react';
import { useDispatch, useSelector } from 'react-redux';

import { activeSeatsSelector } from '@/entities/ticket/model/selectors.jsx';
import { ticketActions } from '@/entities/ticket/model/ticketSlice.js';
import { Title } from '@/shared/ui/Title/Title.jsx';

export const PassengerFormTop = ({ setIsOpen, isOpen, remove, index, filed, count }) => {
  const dispatch = useDispatch();
  const departureActiveSeats = useSelector(activeSeatsSelector);

  const handleClick = () => setIsOpen(!isOpen);
  const handleDelete = () => {
    remove(index)
    dispatch(ticketActions.deleteSeat({
      seat_number: filed.seat_number,
      direction: filed.direction,
      coach_id: filed.coach_id,
    }))
  }
  return (
    <div className={'passenger-form__top'}>
      <button className={'passenger-form__top-button'} type={'button'} onClick={handleClick}>
        {isOpen ? <PassengerCloseSvg/> : <PassengerOpenSvg/>}
      </button>
      <Title> Пассажир {count}</Title>
      {departureActiveSeats.length > 1  &&
        <button className={'passenger-form__delete'} type={'button'} onClick={handleDelete}>
        <CloseSvg/>
      </button>}

    </div>
  );
};
