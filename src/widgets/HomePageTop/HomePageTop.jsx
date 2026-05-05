import './HomePageTop.css'
import { BookingForm } from '@/features/BookingForm/BookingForm.jsx';
import { Container } from '@/shared/ui/Container/Container.jsx';

export const HomePageTop = () => {
  return (
    <section className="home-top">
       <Container className='home-top__inner'>
            <h1 className='home-top__title'>
              Вся жизнь -
              <span>  путешествие!</span>

            </h1>
         <BookingForm />
       </Container>
    </section>
  );
};
