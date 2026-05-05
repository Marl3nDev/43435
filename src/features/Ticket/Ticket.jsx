
import { useTicketSelection } from './hooks/useTicketSelection.jsx';
import { TicketRoute } from './TicketRoute.jsx';

import { Button } from '@/shared/ui/Button/Button.jsx';
import { LoadingForSection } from '@/shared/ui/Loading/LoadingForSection.jsx';
import { Title } from '@/shared/ui/Title/Title.jsx';


import './Ticket.css';


export const Ticket = ({ id }) => {
  const {
    data,
    seats,
    activeTicket,
    passengers,
    setPassengers,
    arrivalPassengers,
    setArrivalPassengers,
    disabled,
    handleClick
  } = useTicketSelection(id);

  if (!data) {
    return (
      <section className="ticket">
        <LoadingForSection/>
      </section>
    );
  }

  if (!activeTicket) {
    return (
      <section className="ticket">
        <Title>Билет не найден</Title>
      </section>
    );
  }

  return (
    <section className="ticket">
      {seats?.length > 0 && (
        <>
          <Title className="ticket__title" variant="medium">
            Выбор мест
          </Title>

          <TicketRoute
            passengers={passengers}
            setPassengers={setPassengers}
            activeTicket={activeTicket.departure}
            id={id}
          />

          {activeTicket.arrival && (
            <TicketRoute
              passengers={arrivalPassengers}
              setPassengers={setArrivalPassengers}
              arrival
              activeTicket={activeTicket.arrival}
              id={id}
            />
          )}

          <Button
            className="ticket__button"
            disabled={disabled}
            onClick={handleClick}
            color="white"
            size={'lg'}
          >
            Далее
          </Button>
        </>
      )}
    </section>
  );
};