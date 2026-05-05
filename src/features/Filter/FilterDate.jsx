import { useTickets } from '@/shared/hooks/useTickets/useTickets.jsx';
import { Calendar } from '@/shared/ui/Calendar/Calendar.jsx';
import { formatDate } from '@/shared/utils/formateDate/formateDate.js';

export const FilterDate = () => {
  const { params, searchTicketsWithParams } = useTickets();
  const startDate = params.date_start && new Date(params.date_start);
  const endDate = params.date_end && new Date(params.date_end);

  const changeDate = (date, name) => {
    searchTicketsWithParams({
      ...params,
      [name]: formatDate(date),
    })
  }

  return (
    <div className="filter__block filter__date">
      <div className={'filter__date-item'}>
        <h3 className={'filter__title'}>Дата поездки</h3>
        <Calendar small
                  date={startDate}
                  maxDate={endDate}
                  setDate={(date) => changeDate(date, 'date_start')}
        />
      </div>
      <div className={'filter__date-item'}>
        <h3 className={'filter__title'}>Дата возвращения</h3>
        <Calendar small
                  setDate={(date) => changeDate(date, 'date_end')}
                  date={endDate}
                  minDate={startDate}
        />
      </div>
    </div>
  );
};
