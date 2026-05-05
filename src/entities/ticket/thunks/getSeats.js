import { createAsyncThunk } from '@reduxjs/toolkit'

import { API } from '@/shared/api/index.js';

export const getSeats = createAsyncThunk(
  'TICKET/GET_SEATS',
  async ({ id, ticket }) => {
    const response = await fetch(API.SEATS(id))
    const data = await response.json()
    return { data, ticket }
  }
)