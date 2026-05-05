import './Passengers.css';

import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { AddPassenger } from './AddPassenger.jsx';
import { usePassengersForm } from './hooks/usePassengersForm';

import { activeSeatsSelector } from '@/entities/ticket/model/selectors.jsx';
import { PassengerFormItem } from '@/features/PassengerFormItem/PassengerFormItem.jsx';
import { PagePaths } from '@/shared/configs/routerConfig/routerConfig.jsx';
import { Button } from '@/shared/ui/Button/Button.jsx';

export const Passengers = () => {
  const departureActiveSeats = useSelector(activeSeatsSelector) || [];


  const {
    form: {
      control,
      register,
      watch,
      setValue,
      trigger,
      handleSubmit,
      formState: { errors, isValid } },
    fieldArray: { fields, append, remove },
    onSubmit,
  } = usePassengersForm();


  if(departureActiveSeats.length === 0) return <Navigate to={PagePaths.HOMEPAGE} />

  return (
    <section className="passengers">
      <form className="passengers__form" onSubmit={handleSubmit(onSubmit)}>

        {fields.map((field, index) => (
          <PassengerFormItem
            key={field.id}
            index={index}
            filed={field}
            control={control}
            register={register}
            errors={errors}
            watch={watch}
            setValue={setValue}
            trigger={trigger}
            remove={remove}
            count={index + 1}
          />
        ))}

        <AddPassenger append={append} />

        <Button
          disabled={!isValid}
          className="passengers__button"
          color="white"
          size="lg"
        >
          ДАЛЕЕ
        </Button>
      </form>
    </section>
  );
};