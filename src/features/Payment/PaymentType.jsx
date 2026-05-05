import { Checkbox } from '@/shared/ui/Checkbox/Checkbox.jsx';

export const PaymentType = ({ watch, setValue }) => {
  const paymentType = watch('paymentType');

  const checkBoxClick = (type) => {
    setValue('paymentType', type, {
      shouldValidate: true,
      shouldDirty: true,
    });
  }
  return (
    <>

      <div className="payment__top">
        <h3 className={'payment__title'}>Способ оплаты</h3>
      </div>

      <div className={'payment__online'}>
        <Checkbox
          label="Онлайн"
          checked={paymentType === 'online'}
          onClick={() => checkBoxClick('online')}
        />

        <div className={'payment__variants'}>
          <span>Банковской<br/> картой</span>
          <span>PayPal</span>
          <span>Visa QIWI Wallet</span>
        </div>
      </div>

      <div className={'payment__cash'}>
        <Checkbox
          label="Наличными"
          checked={paymentType === 'cash'}
          onClick={() => checkBoxClick('cash')}
        />
      </div>

    </>
  );
};
