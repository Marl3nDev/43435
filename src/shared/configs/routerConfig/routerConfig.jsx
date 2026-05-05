import { HomePage } from '@/pages/HomePage/HomePage.jsx';
import { PassengersPage } from '@/pages/Passengers/PassengersPage.jsx';
import { PaymentPage } from '@/pages/PaymentPage/PaymentPage.jsx';
import { ResultPage } from '@/pages/ResultPage/ResultPage.jsx';
import { SuccessPage } from '@/pages/SuccessPage/SuccessPage.jsx';
import { TicketsPage } from '@/pages/TicketsPage/TicketsPage.jsx';

export const PagePaths = {
  HOMEPAGE: '/',
  TICKETS: '/tickets',
  PASSENGERS: '/passengers',
  PAYMENT: '/payment',
  RESULT: '/result',
  SUCCESS: '/success',
}


export const routerConfig = {
  main: [
    {
      path: PagePaths.HOMEPAGE,
      component: HomePage,
    },
    {
      path: PagePaths.TICKETS,
      component: TicketsPage,
    },
    {
      path: PagePaths.SUCCESS,
      component: SuccessPage,
    }
  ],
  layout: [
    {
      path: PagePaths.PASSENGERS,
      component:
      PassengersPage,
    },
    {
      path: PagePaths.PAYMENT,
      component: PaymentPage,
    },
    {
      path: PagePaths.RESULT,
      component: ResultPage
    }
  ]
}