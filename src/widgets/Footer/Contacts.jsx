import LocationSvg from '@icons/location.svg?react';
import MailSvg from '@icons/mail.svg?react';
import PhoneSvg from '@icons/phone.svg?react';
import SkypeSvg from '@icons/skype.svg?react';

export const Contacts = () => {
  return (
    <div className="footer__contacts">
      <h3 className={'footer__title'}>Свяжитесь с нами</h3>
      <ul className={'footer__contacts-list'}>
        <li className={'footer__contacts-item'}>
          <a className={'footer__contacts-link'} href={'tel:88000000000'}>
            <PhoneSvg/>
            8 (800) 000 00 00
          </a>
        </li>
        <li className={'footer__contacts-item'}>
          <a className={'footer__contacts-link'} href={'mailto:inbox@mail.ru'}>
            <MailSvg/>
            inbox@mail.ru
          </a>
        </li>
        <li className={'footer__contacts-item'}>
          <a className={'footer__contacts-link'} href={'#'}>
            <SkypeSvg/>
            tu.train.tickets
          </a>
        </li>

        <li className={'footer__contacts-item'}>
          <div className={'footer__contacts-address'}>
            <LocationSvg/>
            <span>
            г. Москва<br/>
            ул. Московская 27-35 <br/>
            555 555
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
};
