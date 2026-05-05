import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { Footer } from '@/widgets/Footer/Footer.jsx';
import { Header } from '@/widgets/Header/Header.jsx';

import { AppRouter } from './router/AppRouter.jsx';

import './style/fonts.css'
import './style/reset.css'
import 'swiper/css';
import 'swiper/css/pagination';
import './style/main.css'



export const App = () => {
  const { pathname } =  useLocation()

  useEffect(() => {
    scrollTo(0, 0)
  }, [pathname])
  return (
    <div className="app">
      <Header />
      <main className={'main'}>
        <AppRouter />
      </main>
      <Footer />
    </div>
  );
};
