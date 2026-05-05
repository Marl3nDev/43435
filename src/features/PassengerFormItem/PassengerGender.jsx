import { Controller } from 'react-hook-form';

import { cn } from '@/shared/utils/cn/cn.js';

export const PassengerGender = ({ control, index }) => {
  return (
    <div className="passenger-form__item">
      <label className="passenger-form__label">Пол</label>

      <Controller
        control={control}
        name={`passengers.${index}.gender`}
        defaultValue={true}
        render={({ field }) => (
          <div className="passenger-form__gender">

            <button
              type="button"
              className={cn('passenger-form__gender-button', [], {
                'passenger-form__gender-button--active': field.value === true,
              })}
              onClick={() => field.onChange(true)}
            >
              М
            </button>

            <button
              type="button"
              className={cn('passenger-form__gender-button', [], {
                'passenger-form__gender-button--active': field.value === false,
              })}
              onClick={() => field.onChange(false)}
            >
              Ж
            </button>

          </div>
        )}
      />
    </div>
  );
};