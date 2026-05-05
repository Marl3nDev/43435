
import { Bottom } from './Bottom.jsx';
import { Contacts } from './Contacts.jsx';
import { Socials } from './Socials.jsx';
import { Subscribe } from './Subscribe.jsx';

import { Container } from '@/shared/ui/Container/Container.jsx';



import './Footer.css'

export const Footer = () => {
  return (
    <footer className='footer' id={'footer'}>
      <Container className='footer__inner'>
        <Contacts/>
        <div className={'footer__right'}>
          <Subscribe/>
          <Socials/>
        </div>
      </Container>
      <Bottom/>
    </footer>
  );
};

