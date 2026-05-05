import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { ResultPayment } from '@/widgets/Result/ResultPayment.jsx';

import { useResult } from './hooks/useResult';
import { ResultPassengers } from './ResultPassengers/ResultPassengers.jsx';
import { ResultTicket } from './ResultTicket.jsx';

import { activeSeatsSelector } from '@/entities/ticket/model/selectors.jsx';
import { PagePaths } from '@/shared/configs/routerConfig/routerConfig.jsx';
import { Button } from '@/shared/ui/Button/Button.jsx';

import './Result.css';

export const Result = () => {
  const departureActiveSeats = useSelector(activeSeatsSelector) || [];
  const {
    ticket,
    handleClick,
    personalData
  } = useResult();

  if (departureActiveSeats.length === 0) return <Navigate to={PagePaths.HOMEPAGE}/>

  return (
    <section className="result">

      <ResultTicket ticket={ticket}/>

      <ResultPassengers/>
      <ResultPayment personalData={personalData} />
      <Button className="result__button" color="white" onClick={handleClick}>
        ПОДТВЕРДИТЬ
      </Button>

    </section>
  );
};