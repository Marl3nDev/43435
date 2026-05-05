import { useQuery } from '@tanstack/react-query';

import { API } from '@/shared/api/index.js';

const fetchCities = async (query) => {
  const res = await fetch(`${API.CITIES}?name=${query}`);
  if (!res.ok) throw new Error('Error');
  return res.json();
};

export const useCitiesSearch = (query) => {
  return useQuery({
    queryKey: ['cities', query],
    queryFn: () => fetchCities(query),
    enabled: !!query,
    staleTime: 1000 * 60,
  });
};