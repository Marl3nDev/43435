import './Payment.css';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';

import { PaymentPersonalData } from './PaymentPersonalData.jsx';
import { PaymentType } from './PaymentType.jsx'

import { activeSeatsSelector, personalDataSelector } from '@/entities/ticket/model/selectors.jsx';
import { ticketActions } from '@/entities/ticket/model/ticketSlice.js';
import { PagePaths } from '@/shared/configs/routerConfig/routerConfig.jsx';
import { Button } from '@/shared/ui/Button/Button.jsx';

export const Payment = () => {
  const departureActiveSeats = useSelector(activeSeatsSelector) || [];
const personData = useSelector(personalDataSelector)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    setValue,
    control,
    register,
    handleSubmit,
    watch,
    formState: { isValid },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      firstName:personData.first_name||  '',
      lastName: personData.last_name || '',
      patronymic: personData.patronymic || '',
      phone: personData.phone || '+7',
      email: personData.email || '',
      paymentType: personData.payment_method || 'online',
    },
  });


  const onSubmit = (data) => {
    dispatch(ticketActions.saveInfo({
      'first_name': data.firstName,
      'last_name': data.lastName,
      patronymic: data.patronymic,
      phone: data.phone,
      email: data.email,
      'payment_method': data.paymentType,
    }));

    navigate(PagePaths.RESULT);
  };
  if(departureActiveSeats.length === 0) return <Navigate to={PagePaths.HOMEPAGE} />
  return (
    <div className="payment">
      <form onSubmit={handleSubmit(onSubmit)}>

        <div className={'payment__form-main'}>

          <PaymentPersonalData register={register} control={control}/>
          <PaymentType  watch={watch} setValue={setValue} />
        </div>

        <Button
          className={'payment__button'}
          color={'white'}
          disabled={!isValid}
        >
          КУПИТЬ БИЛЕТЫ
        </Button>

      </form>
    </div>
  );
};