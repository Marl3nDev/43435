import { useEffect, useRef, useState } from 'react';
import { useWatch } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { ticketActions } from '@/entities/ticket/model/ticketSlice.js';

const getFirstErrorMessage = (errors) => {
  if (!errors) return null;

  for (const key in errors) {
    if (errors[key]?.message) return errors[key].message;

    if (typeof errors[key] === 'object') {
      const nested = getFirstErrorMessage(errors[key]);
      if (nested) return nested;
    }
  }

  return null;
};

export const usePassengerFormItem = ({
                                       control,
                                       index,
                                       filed,
                                       errors,
                                       trigger
                                     }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const isFirstRender = useRef(true);

  const type = useWatch({
    control,
    name: `passengers.${index}.type`,
  });

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    dispatch(ticketActions.changeAge({
      seat_number: filed.seat_number,
      age: type,
      direction: filed.direction,
    }));
  }, [type, dispatch, filed.seat_number, filed.direction]);

  const handleValidate = async () => {
    await trigger(`passengers.${index}`);
    setShow(true);

    setTimeout(() => setShow(false), 2000);
  };

  const currentErrors = errors?.passengers?.[index];
  const errorMessage = getFirstErrorMessage(currentErrors);

  return {
    show,
    handleValidate,
    currentErrors,
    errorMessage,
  };
};