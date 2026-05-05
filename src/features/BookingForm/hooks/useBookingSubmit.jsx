import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { PagePaths } from '@/shared/configs/routerConfig/routerConfig.jsx';
import { formatDate } from '@/shared/utils/formateDate/formateDate.js';

export const useBookingSubmit = (data) => {
  const [errors, setErrors] = useState({
    from: '',
    to: ''
  });

  const navigate = useNavigate();

  const error = (key) => {
    if (!data[key].name) {
      setErrors(e => ({
        ...e,
        [key]: 'Введите поле',
      }))

      return
    } else if (data[key].name && errors[key]) setErrors(e => ({
      ...e,
      [key]: ''
    }));

    if (!data[key].id) {
      setErrors(e => ({
        ...e,
        [key]: 'Некоректное местоположение',
      }))
    }
  };

  const onSubmit = (e) => {
    e.preventDefault()

    error('from')
    error('to')

    if (!data.to.id || !data.from.id) return

    const paramsOjb = {
      from_city_id: data.from.id,
      to_city_id: data.to.id
    }
    if (data.startDate) {
      paramsOjb.date_start = formatDate(data.startDate)
    }
    if (data.endDate) {
      paramsOjb.date_end = formatDate(data.endDate)
    }

    const params = new URLSearchParams(paramsOjb)

    navigate({
      pathname: PagePaths.TICKETS,
      search: `${params}`
    })

  }

  return { onSubmit, errors, setErrors }
}