import FacebookSvg from '@icons/facebook.svg?react';
import GmailSvg from '@icons/gmail.svg?react';
import LinkedInSvg from '@icons/linkedIn.svg?react';
import TwitterSvg from '@icons/twitter.svg?react';
import YouTubeSvg from '@icons/youtube.svg?react';

export const Socials = () => {
  return (
    <div className={'footer__socials'}>
      <h3 className={'footer__title'}>
        Подписывайтесь на нас
      </h3>
      <ul className={'footer__socials-list'}>
        <li className={'footer__socials-item'}>
          <a className={'footer__socials-link'} href={'#'}>
              <YouTubeSvg />
          </a>
        </li>
        <li className={'footer__socials-item'}>
          <a className={'footer__socials-link'} href={'#'}>
            <LinkedInSvg />
          </a>
        </li>
        <li className={'footer__socials-item'}>
          <a className={'footer__socials-link'} href={'#'}>
            <GmailSvg />
          </a>
        </li>
        <li className={'footer__socials-item'}>
          <a className={'footer__socials-link'} href={'#'}>
            <FacebookSvg />
          </a>
        </li>
        <li className={'footer__socials-item'}>
          <a className={'footer__socials-link'} href={'#'}>
            <TwitterSvg />
          </a>
        </li>
      </ul>
    </div>
  );
};
