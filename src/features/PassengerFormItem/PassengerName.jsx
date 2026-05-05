import { Input } from '@/shared/ui/Input/Input.jsx';

export const PassengerName = ({ errors, register, index }) => {


  return (
    <div className={'passenger-form__inputs'}>

      <div className={'passenger-form__item'}>
        <label className={'passenger-form__label'}>
          Фамилия
        </label>

        <Input
          variant={'small'}
          errorBorder={!!errors?.passengers?.[index]?.lastName}
          {...register(`passengers.${index}.lastName`, {
            required: 'Фамилия обезательное поле',
          })}
        />

      </div>

      <div className={'passenger-form__item'}>
        <label className={'passenger-form__label'}>
          Имя
        </label>

        <Input
          variant={'small'}
          errorBorder={!!errors?.passengers?.[index]?.firstName}
          {...register(`passengers.${index}.firstName`, {
            required: 'Имя обезательное поле',
          })}
        />

      </div>

      <div className={'passenger-form__item'}>
        <label className={'passenger-form__label'}>
          Отчество
        </label>

        <Input
          variant={'small'}
          errorBorder={!!errors?.passengers?.[index]?.patronymic}
          {...register(`passengers.${index}.patronymic`, {
            required: 'Отчество обезательное поле',
          })}
        />

      </div>

    </div>
  );
};