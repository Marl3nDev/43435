import { useMemo } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { activeSeatsSelector } from '@/entities/ticket/model/selectors.jsx';
import { ticketActions } from '@/entities/ticket/model/ticketSlice.js';
import { PagePaths } from '@/shared/configs/routerConfig/routerConfig.jsx';

const EMPTY_ARRAY = []

export const usePassengersForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const departureSeats = useSelector(activeSeatsSelector, shallowEqual) ?? EMPTY_ARRAY;
  const arrivalSeats = useSelector(
    (state) => activeSeatsSelector(state, 'arrival'),
    shallowEqual
  ) ?? EMPTY_ARRAY;

  const seats = useMemo(
    () => [...arrivalSeats, ...departureSeats],
    [arrivalSeats, departureSeats]
  );

  const defaultPassengers = useMemo(
    () =>
      seats.map((seat) => {
        const [series = '', number = ''] =
        seat.person_info.document_data?.split(' ') || [];

        return {
          coach_id: seat.coach_id,
          firstName: seat.person_info?.first_name || '',
          lastName: seat.person_info?.last_name || '',
          patronymic: seat.person_info?.patronymic || '',
          birthday: seat.person_info?.birthday || '',
          seat_number: seat.seat_number,
          direction: seat.direction,
          type: seat.is_child ? 'Детский' : 'Взрослый',
          gender: true,
          document_type: seat.person_info.document_type,
          document_series: series,
          document_number: number,
          document_data: seat.person_info.document_data || '',
        };
      }),
    [seats]
  );
  const form = useForm({
    mode: 'onChange',
    defaultValues: {
      passengers: defaultPassengers
    }
  });

  const fieldArray = useFieldArray({
    control: form.control,
    name: 'passengers'
  });

  const onSubmit = (data) => {
    dispatch(
      ticketActions.updateActiveSeats({
        data: data.passengers
      })
    );
    navigate(PagePaths.PAYMENT);
  };

  return {
    form,
    fieldArray,
    onSubmit
  };
};