import CoffeeSvg from '@icons/wagon-coffee.svg?react'
import ConditionerSvg from '@icons/wagon-conditioner.svg?react'
import UnderwearSvg from '@icons/wagon-underwear.svg?react'
import WiFiSvg from '@icons/wagon-wi-fi.svg?react'
import { useDispatch, useSelector } from 'react-redux';

import { TicketServicesButton } from './TicketServicesButton.jsx';

import { servicesSelector } from '@/entities/ticket/model/selectors.jsx';
import { ticketActions } from '@/entities/ticket/model/ticketSlice.js';

export const TicketServices = ({ wagon, arrival }) => {
  const services = useSelector((state) => servicesSelector(state, arrival && 'arrival'));
  const dispatch = useDispatch();

  const toggleService = (name, price, available) => {
    if (!available) return;

    const active = !!services[wagon.coach._id]?.[name];

    if (active) {
      dispatch(ticketActions.deleteService({
        price,
        id: wagon.coach._id,
        name,
        direction:arrival && 'arrival',
      }));
    } else {
      dispatch(ticketActions.addService({
        price,
        id: wagon.coach._id,
        name,
        direction:arrival && 'arrival',
      }));
    }
  };

  return (
    <div className="ticket__services">

      <TicketServicesButton
        icon={ConditionerSvg}
        active={!!services[wagon.coach._id]?.conditioner}
        disabled={!wagon.coach.have_air_conditioning}
        onClick={() =>
          toggleService(
            'conditioner',
            50,
            wagon.coach.have_air_conditioning
          )
        }
      >
        кондиционер {wagon.coach.have_air_conditioning && '(50)'}
      </TicketServicesButton>

      <TicketServicesButton
        icon={WiFiSvg}
        active={!!services[wagon.coach._id]?.wi_fi}
        disabled={!wagon.coach.have_wifi}
        onClick={() =>
          toggleService(
            'wi_fi',
            wagon.coach.wifi_price,
            wagon.coach.have_wifi
          )
        }
      >
        WI-FI {wagon.coach.have_wifi && `(${wagon.coach.wifi_price})`}
      </TicketServicesButton>

      <TicketServicesButton
        icon={UnderwearSvg}
        active={!!services[wagon.coach._id]?.linens}
        disabled={wagon.coach.is_linens_included}
        onClick={() =>
          toggleService(
            'linens',
            100,
            !wagon.coach.is_linens_included
          )
        }
      >
        белье
        {wagon.coach.is_linens_included
          ? ' (включено)'
          : ' (100)'}
      </TicketServicesButton>

      <TicketServicesButton icon={CoffeeSvg} disabled>
        питание
      </TicketServicesButton>

    </div>
  );
};