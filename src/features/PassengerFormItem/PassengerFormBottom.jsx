import ErrorSvg from '@icons/error-icon.svg?react';
import SuccessSvg from '@icons/success-icon.svg?react';

import { usePassengerFormItem } from './hooks/usePassengerFormItem.jsx';

import { Button } from '@/shared/ui/Button/Button.jsx';

export const PassengerFormBottom = ({ control, index, filed, errors, trigger }) => {
  const {
    show,
    handleValidate,
    currentErrors,
    errorMessage
  } = usePassengerFormItem({
    control,
    index,
    filed,
    errors,
    trigger
  });
  return (
    <div className="passenger-form__bottom">
      <Button
        type="button"
        onClick={handleValidate}
        className="passenger-form__button"
        size="xl"
        variant="black-ghost"
      >
        Следующий пассажир
      </Button>

      {currentErrors && show && (
        <div className="passenger-form__error">
          <ErrorSvg />
          <p className="passenger-form__error-text">
            {errorMessage === 'Формат: VIII-ЫП-123456' ? (
              <>
                Номер свидетельства о рождении указан некорректно <br />
                Пример: <span>VIII-ЫП-123456</span>
              </>
            ) : errorMessage}
          </p>
        </div>
      )}

      {!currentErrors && show && (
        <div className="passenger-form__ok">
          <SuccessSvg />
          <p className="passenger-form__ok-text">Готово</p>
        </div>
      )}
    </div>

  );
};
