import './SuccessInfo.css'
import RubSvg from '@icons/rub.svg?react'
import StarsSvg from '@icons/stars.svg?react'
import SuccessItemSvg from '@icons/success-item-1.svg?react'
import SuccessItem2Svg from '@icons/success-item-2.svg?react'
import SuccessItem3Svg from '@icons/success-item-3.svg?react'
import { useSelector } from 'react-redux';

import { personalDataSelector, priceSelector } from '@/entities/ticket/model/selectors.jsx';
import { PagePaths } from '@/shared/configs/routerConfig/routerConfig.jsx';
import { Button } from '@/shared/ui/Button/Button.jsx';
import { Container } from '@/shared/ui/Container/Container.jsx';

export const SuccessInfo = () => {
  const price = useSelector(priceSelector);
  const personalInfo = useSelector(personalDataSelector);
  const arrivalPrice = useSelector((state) => priceSelector(state, 'arrival')) || 0;

  return (
    <section className="success-info">
      <Container>
        <div className="success-info__block">
          <div className={'success-info__top'}>
            <h3 className={'success-info__number'}>
              №Заказа 285АА
            </h3>
            <div className={'success-info__price'}>
              <span>сумма</span>
              {price + arrivalPrice}
              <RubSvg/>
            </div>
          </div>
          <ul className={'success-info__list'}>
            <li className={'success-info__item'}>
              <SuccessItemSvg/>
              <p className={'success-info__item-text'}>
                билеты будут <br/> отправлены <br/>
                на ваш <span>e-mail</span>
              </p>
            </li>
            <li className={'success-info__item'}>
              <SuccessItem2Svg/>
              <p className={'success-info__item-text'}>
                билеты будут <br/> отправлены <br/>
                на ваш <span>e-mail</span>
              </p>
            </li>
            <li className={'success-info__item'}>
              <SuccessItem3Svg/>
              <p className={'success-info__item-text'}>
                билеты будут <br/> отправлены <br/>
                на ваш <span>e-mail</span>
              </p>
            </li>
          </ul>

          <div className={'success-info__wrapper'}>
            <h5 className={'success-info__name'}>
              {personalInfo.first_name} {' '} {personalInfo.last_name}!
            </h5>
            <p className={'success-info__text'}>
              Ваш заказ успешно оформлен. <br/>
              В ближайшее время с вами свяжется наш оператор для подтверждения.
            </p>

            <p className={'success-info__text'}>
              Благодарим Вас за оказанное доверие и желаем приятного путешествия!
            </p>
          </div>
          <div className={'success-info__bottom'}>
            <div className={'success-info__stars'}>
              Оценить сервис
              <StarsSvg/>
            </div>
            <Button className={'success-info__button'} variant={'black-ghost'} to={PagePaths.HOMEPAGE}>
              ВЕРНУТСЯ НА ГЛАВНУЮ
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
