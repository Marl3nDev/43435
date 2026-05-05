import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { createApi } from '@reduxjs/toolkit/query/react';

const MAiN_API = 'https://students.netoservices.ru/fe-diplom'

export const API = {
  CITIES: `${MAiN_API}/routes/cities`,
  ROUTES: `${MAiN_API}/routes`,
  LAST_TICKETS: `${MAiN_API}/routes/last`,
  SEATS: (id) => `${MAiN_API}/routes/${id}/seats`,
}

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: MAiN_API,
  }),
  endpoints: () => ({}),
})