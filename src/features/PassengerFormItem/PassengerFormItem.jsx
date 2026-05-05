import './PassengerFormItem.css';
import { useState } from 'react';
import { Controller } from 'react-hook-form';


import { PassengerFormBottom } from './PassengerFormBottom.jsx';
import { PassengerFormTop } from './PassengerFormTop.jsx';
import { PassengerName } from './PassengerName.jsx';

import { PassengerBirthday } from '@/features/PassengerFormItem/PassengerBirthday.jsx';
import { PassengerDocument } from '@/features/PassengerFormItem/PassengerDocument.jsx';
import { PassengerGender } from '@/features/PassengerFormItem/PassengerGender.jsx';
import { Checkbox } from '@/shared/ui/Checkbox/Checkbox.jsx';
import { SimpleSelect } from '@/shared/ui/SimpleSelect/SimpleSelect.jsx';
import { cn } from '@/shared/utils/cn/cn.js';


export const PassengerFormItem = ({
                                    filed,
                                    errors,
                                    trigger,
                                    watch,
                                    setValue,
                                    remove,
                                    register,
                                    control,
                                    index,
                                    count
                                  }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [checked, setChecked] = useState(false);



  return (
    <div className={cn('passenger-form', [], {
      'passenger-form--closed': !isOpen,
    })}>

      <PassengerFormTop
        index={index}
        filed={filed}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        remove={remove}
        register={register}
        control={control}
        count={count}
      />

      <div className="passenger-form__content">

        <div className="passenger-form__select-wrapper">
          <Controller
            control={control}
            name={`passengers.${index}.type`}
            defaultValue="Взрослый"
            rules={{ required: true }}
            render={({ field }) => (
              <SimpleSelect
                className="passenger-form__select"
                buttonClass="passenger-form__select-button"
                value={field.value}
                options={['Взрослый', 'Детский']}
                onChange={field.onChange}
              />
            )}
          />
        </div>

        <PassengerName
          errors={errors}
          remove={remove}
          register={register}
          index={index}
        />

        <div className="passenger-form__wrapper">
          <PassengerGender control={control} index={index} />
          <PassengerBirthday control={control} index={index} />
        </div>

        <div className="passenger-form__checkbox">
          <Checkbox
            checked={checked}
            onClick={setChecked}
            label="ограниченная подвижность"
          />
        </div>

        <PassengerDocument
          errors={errors}
          trigger={trigger}
          setValue={setValue}
          control={control}
          index={index}
          register={register}
          watch={watch}
        />

      <PassengerFormBottom
        index={index}
        control={control}
        filed={filed}
        trigger={trigger}
        errors={errors} />
      </div>
    </div>
  );
};