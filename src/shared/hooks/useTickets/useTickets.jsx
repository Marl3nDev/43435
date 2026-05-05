import { useMemo, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useGetRoutesQuery } from '@/entities/ticket/api/getRoutes.js';

export const useTickets = () => {
  const { search } = useLocation();
  const navigate = useNavigate();

  const params = useMemo(() => {
    return Object.fromEntries(new URLSearchParams(search));
  }, [search]);

  const data = useGetRoutesQuery(params);

  const searchTicketsWithParams = useCallback((params) => {
    const newParams = new URLSearchParams();

    Object.entries(params || {}).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        newParams.set(key, String(value));
      }
    });

    navigate(`?${newParams.toString()}`, { replace: true });
  }, [navigate]);

  return {
    params,
    searchTicketsWithParams,
    ...data,
  };
};