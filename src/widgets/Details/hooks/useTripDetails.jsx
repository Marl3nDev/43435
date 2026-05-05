import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import {
  activeSeatsSelector,
  priceSelector,
  ticketSelector
} from '@/entities/ticket/model/selectors.jsx';

export const useTripDetails = () => {
  const ticket = useSelector(ticketSelector) || {};
  const { departure, arrival } = ticket;

  const departurePrice = useSelector(priceSelector) ?? 0;
  const arrivalPrice = useSelector(
    (state) => priceSelector(state, 'arrival')
  ) ?? 0;

  const activeDepartureSeatsRaw = useSelector(activeSeatsSelector);
  const activeArrivalSeatsRaw = useSelector((state) =>
    activeSeatsSelector(state, 'arrival')
  );

  const priceInfo = useMemo(() => {
    const activeDepartureSeats = activeDepartureSeatsRaw ?? [];
    const activeArrivalSeats = activeArrivalSeatsRaw ?? [];

    return [...activeDepartureSeats, ...activeArrivalSeats].reduce(
      (acc, { is_child, price = 0 }) => {
        const key = is_child ? 'children' : 'adults';

        acc[key].count += 1;
        acc[key].price += price;

        return acc;
      },
      {
        adults: { price: 0, count: 0 },
        children: { price: 0, count: 0 }
      }
    );
  }, [activeDepartureSeatsRaw, activeArrivalSeatsRaw]);

  const totalPrice = useMemo(
    () => departurePrice + arrivalPrice,
    [departurePrice, arrivalPrice]
  );

  return {
    departure,
    arrival,
    totalPrice,
    priceInfo
  };
};