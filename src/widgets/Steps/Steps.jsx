import './Steps.css';
import { useLocation } from 'react-router-dom';

import { Step } from './Step.jsx';

import { Container } from '@/shared/ui/Container/Container.jsx';
import { cn } from '@/shared/utils/cn/cn.js';

export const Steps = () => {
  const { pathname } = useLocation();


  const stepIndex = (() => {
    if (pathname.includes('tickets')) return 1;
    if (pathname.includes('passengers')) return 2;
    if (pathname.includes('payment')) return 3;
    if (pathname.includes('result')) return 4;
    return 1;
  })();

  return (
    <section className={cn('steps', [], {
      'steps--fourth': stepIndex === 4,
    })}>
      <Container>
        <ul className={'steps__list'}>
          <Step active={stepIndex >= 1}>Билеты</Step>
          <Step active={stepIndex >= 2}>Пассажиры</Step>
          <Step active={stepIndex >= 3}>Оплата</Step>
          <Step active={stepIndex >= 4} last>
            Проверка
          </Step>
        </ul>
      </Container>
    </section>
  );
};