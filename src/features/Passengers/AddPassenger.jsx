import OrangePlusSvg from '@icons/orange-plus.svg?react';
import { useDispatch, useSelector } from 'react-redux';

import { findEmptyPlace } from './utiils/findEmptyPlace.js';

import { seatsSelector } from '@/entities/ticket/model/selectors.jsx';
import { ticketActions } from '@/entities/ticket/model/ticketSlice.js';


export const AddPassenger = ({ append }) => {
  const dispatch = useDispatch();
  const seats = useSelector(seatsSelector)

  const handleClick = () => {
    const placeInfo = findEmptyPlace(seats);

    if (!placeInfo) return;

    const newPassenger = {
      firstName: '',
      lastName: '',
      patronymic: '',
      birthday: '',
      seat_number: placeInfo.index,
      direction: 'departure',
      type: 'Взрослый',
      gender: true,
      document_type: 'паспорт',
      document_series: '',
      document_number: '',
      document_data: '',
      coach_id: placeInfo.coach_id,
    };
    append(newPassenger);

    dispatch(ticketActions.addSeat({
      placeInfo,
      direction: newPassenger.direction,
    }));
  }
  return (
    <button className={'passengers__add'} onClick={handleClick} type={'button'}>
      Добавить пассажира
      <OrangePlusSvg/>
    </button>
  );
};
