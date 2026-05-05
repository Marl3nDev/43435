import { TicketCardGraphic } from './TicketCardGraphic.jsx';
import { TicketCardInfo } from './TicketCardInfo.jsx';
import { TicketCardPrices } from './TicketCardPrices.jsx';

import './TicketCard.css'

export const TicketCard = ({ departure, arrival, children }) => {
  return (
    <div className="ticket-card">
      <TicketCardInfo departure={departure}/>
      <TicketCardGraphic departure={departure} arrival={arrival}/>
      <TicketCardPrices departure={departure}>{children}</TicketCardPrices>
    </div>
  );
};


