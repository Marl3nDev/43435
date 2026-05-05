import { Calendar } from '@/shared/ui/Calendar/Calendar.jsx';
import { Title } from '@/shared/ui/Title/Title.jsx';

export const BookingDate = ({ data, setData }) => {
  const changeDate = (date, key) => setData({ ...data, [key]: date });


  return (
    <div className={'booking__date'}>
      <Title className={'booking__title'} variant={'light'}>Дата</Title>
      <div className={'booking__wrapper'}>
        <Calendar
          date={data.startDate}
          maxDate={data.endDate}
          setDate={(date) => changeDate(date, 'startDate')}
        />
        <Calendar
          date={data.endDate}
          minDate={data.startDate}
          setDate={(date) => changeDate(date, 'endDate')}
        />
      </div>
    </div>
  );
};
