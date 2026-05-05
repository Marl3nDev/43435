import { baseApi } from '@/shared/api'

export const routeApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getRoutes: build.query({
      query: (params) => ({
        url: '/routes',
        params: {
          from_city_id: params.from_city_id,
          to_city_id: params.to_city_id,
          have_wifi: params.have_wifi,
          have_first_class: params.have_first_class,
          have_second_class: params.have_second_class,
          have_third_class: params.have_third_class,
          have_fourth_class: params.have_fourth_class,
          limit: params.limit,
          offset:params.offset,
          price_from: params.price_from,
          price_to: params.price_to,
          date_start: params.date_start,
          date_end: params.date_end,
          sort: params.sort || 'date',
          start_departure_hour_from: params.start_departure_hour_from,
          start_departure_hour_to: params.start_departure_hour_to,
          start_arrival_hour_from: params.start_arrival_hour_from,
          start_arrival_hour_to : params.start_arrival_hour_to,
          end_departure_hour_from: params.end_departure_hour_from,
          end_departure_hour_to: params.end_departure_hour_to,
          end_arrival_hour_from: params.end_arrival_hour_from,
          end_arrival_hour_to: params.end_arrival_hour_to,
        },
      }),
    }),
  }),
})

export const { useGetRoutesQuery } = routeApi