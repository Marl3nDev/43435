import { useEffect, useRef, useState } from 'react';

import { BookingTop } from '@/widgets/BookingTop/BookingTop.jsx';
import { LastTickets } from '@/widgets/LastTickets/LastTickets.jsx';
import { Sidebar } from '@/widgets/Sidebar/Sidebar.jsx';
import { Steps } from '@/widgets/Steps/Steps.jsx';
import { Tickets } from '@/widgets/Tickets/Tickets.jsx';

import { Filter } from '@/features/Filter/Filter.jsx';
import { Ticket } from '@/features/Ticket/Ticket.jsx';
import { useTickets } from '@/shared/hooks/useTickets/useTickets.jsx';
import { Container } from '@/shared/ui/Container/Container.jsx'
import { Loading } from '@/shared/ui/Loading/Loading.jsx';


export const TicketsPage = () => {
  const { isLoading, params } = useTickets()
  const [firstRendered, setFirstRendered] = useState(true);
  const timerRef = useRef(null);

  useEffect(() => {
    document.body.style.backgroundColor = '#F7F5F9';

    timerRef.current = setTimeout(() => {
      setFirstRendered(false);
    }, 2000)

    return () => {
      document.body.style.backgroundColor = '';
      clearTimeout(timerRef.current);
    };
  }, []);


  if(!params.from_city_id ||
    !params.to_city_id) return <BookingTop/>;

  return (
    <>
      <BookingTop/>
      {(firstRendered || isLoading) &&  !params.id ? <Loading/> : <>
        <Steps/>
        <Container row>
          <Sidebar>
            <Filter/>
            <LastTickets/>
          </Sidebar>
          {params.id ? <Ticket id={params.id}/> : <Tickets />}
        </Container>
      </>}
    </>
  );
}
