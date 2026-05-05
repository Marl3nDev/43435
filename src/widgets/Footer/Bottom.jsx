
import UpSvg from '@icons/up.svg?react'

import { Container } from '@/shared/ui/Container/Container.jsx';
import { Logo } from '@/shared/ui/Logo/Logo.jsx';


export const Bottom = () => {
  return (
    <div className={'footer__bottom'}>
      <Container className='footer__bottom-inner'>
        <Logo/>
        <button className={'footer__up-button'}>
          <UpSvg/>
        </button>
        <span className={'footer__web'}>
            2018 WEB
          </span>
      </Container>
    </div>
  );
};
