import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ReviewsItem } from './ReviewsItem.jsx';

import firstImg from '@/shared/assets/images/reviews-img-1.png';
import secondImg from '@/shared/assets/images/reviews-img-2.png';
import { Container } from '@/shared/ui/Container/Container.jsx'
import { Title } from '@/shared/ui/Title/Title.jsx';

import './Reviews.css'


export const Reviews = () => {
  return (
    <section className="reviews" id={'reviews'}>
      <Container>
        <Title>ОТЗЫВЫ</Title>
        <Swiper
          className={'reviews__slider'}
          slidesPerView={2}
          modules={[Pagination]}
          spaceBetween={85}
          pagination={{ clickable: true }}

        >
          <SwiperSlide>
            <ReviewsItem src={firstImg} alt={'img'} name={'Екатерина Вальнова'}>
              Доброжелательные подсказки
              на всех этапах помогут правильно заполнить поля и без затруднений купить авиа или ж/д билет, даже если вы
              заказываете онлайн билет впервые.
            </ReviewsItem>
          </SwiperSlide>
          <SwiperSlide>
            <ReviewsItem src={secondImg} alt={'img'} name={'Евгений Стрыкало'}>
              СМС-сопровождение до посадки
              Сразу после оплаты ж/д билетов
              и за 3 часа до отправления мы пришлем вам СМС-напоминание о поездке.
            </ReviewsItem>
          </SwiperSlide>
          <SwiperSlide>
            <ReviewsItem src={secondImg} alt={'img'} name={'Евгений Стрыкало'}>
              СМС-сопровождение до посадки
              Сразу после оплаты ж/д билетов
              и за 3 часа до отправления мы пришлем вам СМС-напоминание о поездке.
            </ReviewsItem>
          </SwiperSlide>
          <SwiperSlide>
          <ReviewsItem src={secondImg} alt={'img'} name={'Евгений Стрыкало'}>
            СМС-сопровождение до посадки
            Сразу после оплаты ж/д билетов
            и за 3 часа до отправления мы пришлем вам СМС-напоминание о поездке.
          </ReviewsItem>
        </SwiperSlide>
          <SwiperSlide>
          <ReviewsItem src={secondImg} alt={'img'} name={'Евгений Стрыкало'}>
            СМС-сопровождение до посадки
            Сразу после оплаты ж/д билетов
            и за 3 часа до отправления мы пришлем вам СМС-напоминание о поездке.
          </ReviewsItem>
        </SwiperSlide>
          <SwiperSlide>
            <ReviewsItem src={secondImg} alt={'img'} name={'Евгений Стрыкало'}>
              СМС-сопровождение до посадки
              Сразу после оплаты ж/д билетов
              и за 3 часа до отправления мы пришлем вам СМС-напоминание о поездке.
            </ReviewsItem>
          </SwiperSlide>
        </Swiper>
      </Container>
    </section>
  );
};
