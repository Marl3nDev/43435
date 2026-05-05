import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { BookingTop } from '@/widgets/BookingTop/BookingTop.jsx';
import { Details } from '@/widgets/Details/Details.jsx';
import { Sidebar } from '@/widgets/Sidebar/Sidebar.jsx';
import { Steps } from '@/widgets/Steps/Steps.jsx';

import { Container } from '@/shared/ui/Container/Container.jsx'



export const Layout = () => {

  useEffect(() => {
    document.body.style.backgroundColor = '#F7F5F9';
    window.scrollTo(0 , 0)

    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);



  return (
    <>
      <BookingTop/>
      <Steps/>
      <Container row>
        <Sidebar>
<Details />
        </Sidebar>
        <Outlet />
      </Container>
    </>
  );
}
