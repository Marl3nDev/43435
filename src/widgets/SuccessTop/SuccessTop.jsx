import './SuccessTop.css'
import { Container } from '@/shared/ui/Container/Container.jsx';

export const SuccessTop = () => {
  return (
    <section className={'success-top'}>
          <Container className="success-top__inner">
            <h1 className={'success-top__title'}>
              Благодарим Вас за заказ!
            </h1>
          </Container>
    </section>
  );
};
