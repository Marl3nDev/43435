import ChangeSvg from '@icons/change.svg?react';

import { LocationInput } from '@/features/LocationInput/LocationInput.jsx';
import { Title } from '@/shared/ui/Title/Title.jsx';


export const BookingRoutes = ({ data, setData, errors, setErrors }) => {
  const setValue = (item, key) => setData({ ...data, [key]: item });
  const changeValues = () => {
    setData({
      ...data,
      to: data.from,
      from: data.to,
    })
    setErrors({
      to: errors.from,
      from: errors.to,
    })
  }

  return (
    <div className={'booking__routes'}>
      <Title className={'booking__title'} variant={'light'}>Направление</Title>
      <div className={'booking__wrapper'}>
        <LocationInput
          placeholder={'Откуда'}
          error={errors.from}
          value={data.from.name}
          setValue={(item) => setValue(item, 'from')}/>
        <button
          className={'booking__change-button'}
          onClick={changeValues}
          type={'button'}
        >
          <ChangeSvg/>
        </button>
        <LocationInput
          placeholder={'Куда'}
          error={errors.to}
          value={data.to.name}
          setValue={(item) => setValue(item, 'to')}
        />
      </div>
    </div>
  );
};
