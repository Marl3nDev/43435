import DesktopSvg from '@icons/desktop.svg?react';
import OfficeSvg from '@icons/office.svg?react';
import RoutesSvg from '@icons/routes.svg?react';

export const HowItWorkList = () => {
  return (<ul className={'how-it-work__list'}>
    <li className={'how-it-work__item'}>
      <DesktopSvg/>
      <span className={'how-it-work__value'}>Удобный заказна сайте</span>
    </li>
    <li className={'how-it-work__item'}>
      <OfficeSvg/>
      <span className={'how-it-work__value'}>Нет необходимости ехать в офис</span>
    </li>
    <li className={'how-it-work__item'}>
      <RoutesSvg/>
      <span className={'how-it-work__value'}>Огромный выбор направлений</span>
    </li>
  </ul>);
};
