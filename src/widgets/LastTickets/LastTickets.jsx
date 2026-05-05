import { useEffect, useState } from 'react';

import { LastTicketsItem } from './LastTicketsItem.jsx';

import { API } from '@/shared/api/index.js';
import { Title } from '@/shared/ui/Title/Title.jsx';

import './LastTickets.css'

export const LastTickets = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(API.LAST_TICKETS).then(res => res.json())
      .then(setData)
  }, [])


  return data.length > 0 && (
    <div className="last-tickets">
      <Title variant={'medium'} className={'last-tickets__title'}>
        последние билеты
      </Title>
      <ul className={'last-tickets__list'}>
        {data.map((item) => (
        <LastTicketsItem  key={item.departure._id} {...item} />  ))}
      </ul>
    </div>
  );
};
