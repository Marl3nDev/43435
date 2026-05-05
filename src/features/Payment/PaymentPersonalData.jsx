import { Controller } from 'react-hook-form';

import { formatPhone } from '@/features/Payment/utils/formatPhone.js';
import { Input } from '@/shared/ui/Input/Input.jsx';
import { Title } from '@/shared/ui/Title/Title.jsx';

export const PaymentPersonalData = ({ register, control, }) => {
  return (
    <
    >
      <div className="payment__top">
        <Title className={'payment__title'}>Персональные данные</Title>
      </div>

      <div className={'payment__content'}>

        <div className={'payment__inputs'}>

          <div className={'payment__item'}>
            <label className={'payment__label'}>Фамилия</label>
            <Input
              variant="small"
              {...register('lastName', {
                required: 'Введите фамилию',
              })}
            />
          </div>

          <div className={'payment__item'}>
            <label className={'payment__label'}>Имя</label>
            <Input
              variant="small"
              {...register('firstName', {
                required: 'Введите имя',
              })}
            />
          </div>

          <div className={'payment__item'}>
            <label className={'payment__label'}>Отчество</label>
            <Input
              variant="small"
              {...register('patronymic')}
            />
          </div>

        </div>

        {/* PHONE */}
        <Controller
          control={control}
          name="phone"
          rules={{
            required: 'Введите телефон',
            minLength: {
              value: 18,
              message: 'Введите полный номер',
            },
          }}
          render={({ field, fieldState }) => (
            <div className={'payment__item payment__contact'}>
              <label className={'payment__label'}>
                Контактный телефон
              </label>

              <Input
                variant="small"
                placeholder="+7 (___) ___-__-__"
                value={field.value || '+7'}
                onChange={(e) => {
                  field.onChange(formatPhone(e.target.value));
                }}
                errorBorder={!!fieldState.error}
              />
            </div>
          )}
        />

        {/* EMAIL */}
        <div className={'payment__item payment__email'}>
          <label className={'payment__label'}>
            E-mail
          </label>

          <Input
            variant="small"
            placeholder="inbox@gmail.ru"
            {...register('email', {
              required: 'Введите email',
            })}
          />
        </div>

      </div>

    </
    >
  );
};
