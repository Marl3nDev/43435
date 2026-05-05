import { useNavigate } from 'react-router-dom';

import { PagePaths } from '@/shared/configs/routerConfig/routerConfig.jsx';
import { Button } from '@/shared/ui/Button/Button.jsx';

export const ResultPayment = ({ personalData }) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(PagePaths.PAYMENT);
  }
  return (
    <div className="result__block">
      <div className="result__block-top">
        <h3 className="result__title">Способ оплаты</h3>
      </div>

      <div className="result__payment">
        <div className="result__payment-type">
          {personalData.payment_method === 'online'
            ? 'Онлайн'
            : 'Наличные'}
        </div>

        <div className="result__right">
          <Button variant="black-ghost" size="sm" onClick={handleClick}>
            Изменить
          </Button>
        </div>
      </div>
    </div>

  );
};
