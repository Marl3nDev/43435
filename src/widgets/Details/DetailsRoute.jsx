import { Title } from '@/shared/ui/Title/Title.jsx';
import { ToggleContent } from '@/shared/ui/ToggleContent/ToggleContent.jsx';
import { formateHours } from '@/shared/utils/formateHours/formateHours.js';

export const DetailsRoute = ({
                               route,
                               title,
                               icon,
                               ArrowIcon,
                               arrival = false,
                             }) => {
  if (!route) return null;

  const trainName = route?.train?.name || '—';

  const fromCity = route?.from?.city?.name || '—';
  const toCity = route?.to?.city?.name || '—';

  const fromStation = route?.from?.railway_station_name || '—';
  const toStation = route?.to?.railway_station_name || '—';

  const fromDate = route?.from?.datetime;
  const toDate = route?.to?.datetime;

  const startTime = formateHours(arrival ? toDate : fromDate);
  const endTime = formateHours(arrival ? fromDate : toDate);

  const duration = formateHours(route?.duration);

  const firstCity = arrival ? (toCity || fromCity) : fromCity;
  const secondCity = arrival ? fromCity : toCity;

  const firstStation = arrival ? fromStation : fromStation;
  const secondStation = arrival ? toStation : toStation;

  return (
    <div className="details__block">
      <ToggleContent
        icon={icon}
        title={
          <Title variant="bold" className="details__title">
            {title}
          </Title>
        }
      >
        <div className="details__info">

          <div className="details__info-item">
            <span className="details__info-key">№ Поезда</span>
            <Title h={4} variant="bold" className="details__info-train">
              {trainName}
            </Title>
          </div>

          <div className="details__info-item">
            <span className="details__info-key">Название</span>
            <span className="details__info-name">
              {fromStation}
            </span>
          </div>

          <div className="details__graphic">
            <Title h={4} variant="bold" className="details__graphic-item">
              {startTime}
            </Title>

            <div className="details__duration">
              {ArrowIcon && <ArrowIcon />}
              <span className="details__duration-time">
                {duration}
              </span>
            </div>

            <Title h={4} variant="bold" className="details__graphic-item">
              {endTime}
            </Title>
          </div>

          <div className="details__info-item">
            <p className="details__info-place">
              {firstCity}
              <span>{firstStation}</span>
            </p>

            <p className="details__info-place">
              {secondCity}
              <span>{secondStation}</span>
            </p>
          </div>

        </div>
      </ToggleContent>
    </div>
  );
};