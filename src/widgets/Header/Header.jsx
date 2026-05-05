import { Link } from 'react-router-dom';


import { useScrollToHash } from './useScrollToHash.jsx'

import { Container } from '@/shared/ui/Container/Container.jsx';
import { Logo } from '@/shared/ui/Logo/Logo.jsx';


import './Header.css'

export const Header = () => {
  useScrollToHash()
  return (
    <header className="header">
      <Container>
        <Logo/>
      </Container>
      <nav className={'header__nav'}>
        <Container className="header__nav-inner">
          <Link className='header__link' to={'/#about'}>
            О нас
          </Link>
          <Link className='header__link' to={'/#how-it-work'}>
            Как это работает
        </Link>
          <Link className='header__link' to={'/#reviews'}>
            Отзывы
        </Link>
          <Link className='header__link' to={'/#footer'}>
            Контакты
        </Link>
        </Container>
      </nav>
    </header>
  );
};
