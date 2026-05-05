import { configureStore } from '@reduxjs/toolkit';

import { tickerReducer } from '@/entities/ticket/model/ticketSlice.js';
import { baseApi } from '@/shared/api/index.js';


export default configureStore({
   reducer: {
      [baseApi.reducerPath]: baseApi.reducer,
      ticket: tickerReducer
   },
   middleware: (getDefaultMiddleware) =>
     getDefaultMiddleware().concat(baseApi.middleware),
})

