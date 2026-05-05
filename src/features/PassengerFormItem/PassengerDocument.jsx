import { Controller } from 'react-hook-form';

import { Input } from '@/shared/ui/Input/Input.jsx';
import { SimpleSelect } from '@/shared/ui/SimpleSelect/SimpleSelect.jsx';
import { cn } from '@/shared/utils/cn/cn.js';


export const PassengerDocument = ({
                                    errors,
                                    control,
                                    watch,
                                    trigger,
                                    index,
                                  }) => {
  const docType = watch(`passengers.${index}.document_type`);

  const getError = (field) =>
    errors?.passengers?.[index]?.[field]?.message;

  return (
    <div className="passenger-form__document">

      {/* TYPE */}
      <div
        className={cn('passenger-form__item', [], {
          'passenger-form__select-full': docType !== 'паспорт',
        })}
      >
        <label className="passenger-form__label">
          Тип документа
        </label>

        <Controller
          control={control}
          name={`passengers.${index}.document_type`}
          defaultValue="паспорт"
          render={({ field }) => (
            <SimpleSelect
              value={field.value}
              options={[
                'паспорт',
                'свидетельство о рождении',
              ]}
              onChange={(val) => {
                field.onChange(val);
                trigger([
                  `passengers.${index}.document_series`,
                  `passengers.${index}.document_number`,
                  `passengers.${index}.document_data`,
                ]);
              }}
            />
          )}
        />
      </div>

      {/* PASSPORT */}
      {docType === 'паспорт' ? (
        <>
          <Controller
            control={control}
            name={`passengers.${index}.document_series`}
            rules={{
              required: 'Введите серию',
              minLength: {
                value: 4,
                message: 'Серия должен содержать 4 цифр'
              }
            }}
            render={({ field }) => (
              <div className="passenger-form__item">
                <label className="passenger-form__label">
                  Серия
                </label>

                <Input
                  {...field}
                  variant="small"
                  placeholder="0 0 0 0"
                  max={4}
                  onlyNumber
                  errorBorder={!!getError('document_series')}
                />
              </div>
            )}
          />

          <Controller
            control={control}
            name={`passengers.${index}.document_number`}
            rules={{
              required: 'Введите номер',
              minLength: {
                value: 6,
                message: 'Номер должен содержать 6 цифр'
              }
            }}
            render={({ field }) => (
              <div className="passenger-form__item">
                <label className="passenger-form__label">
                  Номер
                </label>

                <Input
                  {...field}
                  variant="small"
                  placeholder="0 0 0 0 0 0"
                  max={6}
                  onlyNumber
                  errorBorder={!!getError('document_number')}
                />

              </div>
            )}
          />
        </>
      ) : (
        <Controller
          control={control}
          name={`passengers.${index}.document_data`}
          rules={{
            required: 'Введите номер документа',
            pattern: {
              value: /^[IVX]+-[А-ЯЁ]{2}-\d{6}$/,
              message: 'Формат: VIII-ЫП-123456',
            },
          }}
          render={({ field, fieldState }) => (
            <div className="passenger-form__item passenger-form__number">
              <label className="passenger-form__label">
                Номер
              </label>

              <Input
                {...field}
                variant="small"
                placeholder="VIII-ЫП-123456"
                errorBorder={!!fieldState.error}
              />
            </div>
          )}
        />
      )}
    </div>
  );
};