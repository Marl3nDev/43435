import './BookingTop.css'
import { BookingForm } from '@/features/BookingForm/BookingForm.jsx';
import { Container } from '@/shared/ui/Container/Container.jsx';

export const BookingTop = () => {
  return (
    <section className={'booking-top'}>
      <Container>
        <BookingForm horizontal />
      </Container>
    </section>
  );
};
