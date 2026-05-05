import { useEffect, useState, useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
  activeSeatsSelector,
  seatsSelector
} from '@/entities/ticket/model/selectors.jsx';
import { ticketActions } from '@/entities/ticket/model/ticketSlice.js';
import { getSeats } from '@/entities/ticket/thunks/getSeats.js';
import { PagePaths } from '@/shared/configs/routerConfig/routerConfig.jsx';
import { useTickets } from '@/shared/hooks/useTickets/useTickets.jsx';

const initialPassengers = {
  adult: 0,
  children: 0,
  children_without_place: 0
};

export const useTicketSelection = (id) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data } = useTickets();

  const seats = useSelector((state) => seatsSelector(state, 'departure'));
  const activeSeats = useSelector((state) => activeSeatsSelector(state, 'departure'));
  const activeArrivalSeats = useSelector((state) => activeSeatsSelector(state, 'arrival'));

  const [passengers, setPassengers] = useState(initialPassengers);
  const [arrivalPassengers, setArrivalPassengers] = useState(initialPassengers);

  const activeTicket = useMemo(() => {
    return data?.items?.find(
      ticket => ticket.departure._id === id
    );
  }, [data, id]);

  const departureCount = passengers.adult + passengers.children;
  const arrivalCount = arrivalPassengers.adult + arrivalPassengers.children;

  const isDepartureValid =
    departureCount > 0 &&
    departureCount === activeSeats?.length;

  const isArrivalValid = !activeTicket?.arrival
    ? true
    : arrivalCount > 0 &&
    arrivalCount === activeArrivalSeats?.length;

  const disabled = !(isDepartureValid && isArrivalValid);

  useEffect(() => {
    if (!activeTicket || seats?.length) return;

    dispatch(getSeats({ id, ticket: activeTicket }));
  }, [activeTicket, id, dispatch, seats]);


  const { params } = useTickets()
  const handleClick = useCallback(() => {
    dispatch(ticketActions.saveRouteParams({ id, params }));
    navigate(PagePaths.PASSENGERS);
  }, [dispatch, navigate, id, params]);

  return {
    data,
    seats,
    activeTicket,
    passengers,
    setPassengers,
    arrivalPassengers,
    setArrivalPassengers,
    disabled,
    handleClick
  };
};