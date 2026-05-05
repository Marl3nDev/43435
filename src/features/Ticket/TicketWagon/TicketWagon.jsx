import { useState } from 'react';
import { useSelector } from 'react-redux';

import { TicketTypes } from './TicketTypes.jsx';
import { TicketWagonInfo } from './TicketWagonInfo.jsx';
import { TicketWagonsNames } from './TicketWagonsNames.jsx';
import { TicketSchema } from '../TicketSchema/TicketSchema.jsx';

import { seatsSelector } from '@/entities/ticket/model/selectors.jsx';
import { Title } from '@/shared/ui/Title/Title.jsx';


export const TicketWagon = ({ passengers, arrival }) => {
  const seats = useSelector((state) => seatsSelector(state, arrival && 'arrival'));

  const [activeType, setActiveType] = useState('');
  const [activeWagons, setActiveWagons] = useState([]);


  return (
    <div className="ticket__wagon">
      <Title h={3} variant={'bold'} className="ticket__item-title">Тип вагона</Title>

      <TicketTypes
        activeType={activeType}
        setActiveType={setActiveType}
        arrival={arrival}
        setActiveWagons={setActiveWagons}/>
      {activeType && (
        <>
          <TicketWagonsNames setActiveWagons={setActiveWagons} activeWagons={activeWagons} activeType={activeType}/>

          {
            seats.filter(({ coach }) => activeWagons.includes(coach.name)).map((wagon) =>
              <div className={'ticket__wagons-item'} key={wagon.coach.name}>
                <TicketWagonInfo wagon={wagon} arrival={arrival}/>
                <TicketSchema wagon={wagon} type={activeType} passengers={passengers} arrival={arrival}/>
              </div>)}
        </>
      )}
    </div>
  );
};