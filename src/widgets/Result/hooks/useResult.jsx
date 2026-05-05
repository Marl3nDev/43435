import {  useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
  activeSeatsSelector,
  personalDataSelector,
  ticketSelector,
} from '@/entities/ticket/model/selectors.jsx';
import { PagePaths } from '@/shared/configs/routerConfig/routerConfig.jsx';


const EMPTY_ARRAY = [];

export const useResult = () => {
  const navigate = useNavigate();

  const personalData = useSelector(personalDataSelector);

  const ticket = useSelector(ticketSelector);
  const departureSeats = useSelector(activeSeatsSelector)
  const arrivalSeats = useSelector((state) =>
    activeSeatsSelector(state, 'arrival')
  ) ?? EMPTY_ARRAY;

  const handleClick = useCallback(async () => {
    const payload = {
      user: personalData,
      departure: {
        route_direction_id: ticket.departure._id,
        seats: departureSeats
      },
      ...(arrivalSeats.length > 0 && {
        arrival: {
          route_direction_id: ticket.arrival._id,
          seats: arrivalSeats
        }
      })
    };

    const res = await fetch(
      'https://students.netoservices.ru/fe-diplom/order',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }
    );

    const data = await res.json();

    if (data.status) navigate(PagePaths.SUCCESS);
  }, [personalData, departureSeats, arrivalSeats, navigate, ticket]);

  return {
    ticket,
    handleClick,
    personalData,
    departureSeats,
    arrivalSeats
  };
};