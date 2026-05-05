import { Controller } from 'react-hook-form';

import { Input } from '@/shared/ui/Input/Input.jsx';

const formatDateMask = (value = '') => {
  const digits = value.replace(/\D/g, '').slice(0, 8);

  const parts = [];

  if (digits.length > 0) parts.push(digits.slice(0, 2)); // DD
  if (digits.length > 2) parts.push(digits.slice(2, 4)); // MM
  if (digits.length > 4) parts.push(digits.slice(4, 8)); // YYYY

  return parts.join('.');
};

export const PassengerBirthday = ({ control, index }) => {
  return (
    <div className="passenger-form__item">
      <label className="passenger-form__label">
        Дата рождения
      </label>

      <Controller
        control={control}
        name={`passengers.${index}.birthday`}
        defaultValue=""
        rules={{
          required: 'Введите дату рождения',
          pattern: {
            value: /^\d{2}\.\d{2}\.\d{4}$/,
            message: 'Формат: ДД.ММ.ГГГГ',
          },
        }}
        render={({ field, fieldState }) => (
            <Input
              className="passenger-form__birthday"
              variant="small"
              placeholder="ДД.ММ.ГГГГ"
              value={field.value || ''}
              errorBorder={!!fieldState.error}
              onChange={(e) => {
                field.onChange(formatDateMask(e.target.value));
              }}
            />
        )}
      />
    </div>
  );
};