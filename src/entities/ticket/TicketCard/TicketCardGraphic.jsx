import TicketArrowLeftSvg from '@icons/ticket-arrow-left.svg?react';
import TicketArrowRightSvg from '@icons/ticket-arrow-right.svg?react';

import { formateHours } from '@/shared/utils/formateHours/formateHours.js';

const TicketRow = ({ data, ArrowIcon, className, reverse = false }) => {
  const firstPoint = reverse ? data.to : data.from;
  const secondPoint = reverse ? data.from : data.to;

  return (
    <div className={className}>
      <div className="ticket-card__graphic-item">
        <p className="ticket-card__graphic-hours">
          {formateHours(firstPoint.datetime)}
        </p>
        <p className="ticket-card__graphic-place">
          {firstPoint.city.name} <br />
          <span>{firstPoint.railway_station_name} вокзал</span>
        </p>
      </div>

      <div className="ticket-card__duration">
        <p className="ticket-card__duration-hours">
          {formateHours(data.duration)}
        </p>
        {ArrowIcon && <ArrowIcon/>}
      </div>

      <div className="ticket-card__graphic-item">
        <p className="ticket-card__graphic-hours">
          {formateHours(secondPoint.datetime)}
        </p>
        <p className="ticket-card__graphic-place">
          {secondPoint.city.name} <br />
          <span>{secondPoint.railway_station_name} вокзал</span>
        </p>
      </div>
    </div>
  );
};

export const TicketCardGraphic = ({ arrival, departure }) => {
  return (
    <div className="ticket-card__center">
      <TicketRow
        data={departure}
        ArrowIcon={TicketArrowRightSvg}
        className="ticket-card__graphic"
      />

      {arrival && (
        <TicketRow
          data={arrival}
          ArrowIcon={TicketArrowLeftSvg}
          className="ticket-card__graphic"
          reverse
        />
      )}
    </div>
  );
};