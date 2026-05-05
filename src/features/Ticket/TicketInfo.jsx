import ArrowRightSvg from '@icons/arrow-right.svg?react';
import OclockSvg from '@icons/oclock.svg?react';
import TicketArrowLeftSvg from '@icons/ticket-arrow-left.svg?react';
import TicketArrowRightSvg from '@icons/ticket-arrow-right.svg?react';
import TrainSvg from '@icons/train-2.svg?react';

import { Title } from '@/shared/ui/Title/Title.jsx';
import {
  formateHours,
  formateHoursInText
} from '@/shared/utils/formateHours/formateHours.js';

export const TicketInfo = ({ activeTicket, arrival }) => {
  if (!activeTicket) return null;

  const { train, from, to, duration } = activeTicket;

  const [hours, minutes] = formateHoursInText(duration);

  const firstPoint = arrival ? to : from;
  const secondPoint = arrival ? from : to;

  return (
    <div className="ticket__info">
      <div className="ticket__info-item">
        <TrainSvg className="ticket__info-icon" />

        <div className="ticket__info-wrapper">
          <Title h={5} variant="medium" className="ticket__train-title">
            {train?.name}
          </Title>

          <div className="ticket__direction">
            <span>{from?.city?.name}</span>
            <ArrowRightSvg />
            <br />
            <span>{to?.city?.name}</span>
          </div>
        </div>
      </div>

      <div className="ticket__info-item">
        <div className="ticket__graphic">
          <div className="ticket__graphic-item">
            <Title h={4} variant="bold" className="ticket__graphic-hours">
              {formateHours(firstPoint?.datetime)}
            </Title>

            <p className="ticket__graphic-place">
              {firstPoint?.city?.name} <br />
              <span>{firstPoint?.railway_station_name} вокзал</span>
            </p>
          </div>

          {arrival ? <TicketArrowLeftSvg /> : <TicketArrowRightSvg />}

          <div className="ticket__graphic-item">
            <Title h={4} variant="bold" className="ticket__graphic-hours">
              {formateHours(secondPoint?.datetime)}
            </Title>

            <p className="ticket__graphic-place">
              {secondPoint?.city?.name} <br />
              <span>{secondPoint?.railway_station_name} вокзал</span>
            </p>
          </div>
        </div>
      </div>

      <div className="ticket__info-item ticket__duration">
        <OclockSvg />

        <div className="ticket__hours">
          {hours} <br />
          {minutes}
        </div>
      </div>
    </div>
  );
};