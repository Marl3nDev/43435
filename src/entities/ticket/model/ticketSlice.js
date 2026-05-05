import { createSlice } from '@reduxjs/toolkit';

import { getSeats } from '../thunks/getSeats.js';


const ticketSlice = createSlice({
  name: 'TICKET',
  initialState: {
    personalData: {},
    routeId: '',
    params: '',
    departure: {
      seats: [],
      price: 0,
      activeSeats: [],
      services: {}
    },
    arrival: {}
  },
  reducers: {

    updateSeats: (state, action) => {
      const direction = action.payload.direction || 'departure';

      const wagon = state[direction].seats.find(
        ({ coach }) => coach.name == action.payload.name
      );

      if (!wagon) return;

      const seat = wagon.seats.find(
        ({ index }) => index == action.payload.index
      );

      if (!seat) return;

      const price = action.payload.price;
      const isActive = seat.isActive;

      if (isActive) {
        state[direction].price -= price;

        state[direction].activeSeats = state[direction].activeSeats.filter(
          ({ coach_id, seat_number }) =>
            !(coach_id === wagon.coach._id &&
              seat_number === action.payload.index)
        );
      } else {
        state[direction].price += price;

        state[direction].activeSeats.push({
          coach_id: wagon.coach._id,
          direction,
          price: action.payload.price,
          person_info: {
            first_name: '',
            last_name: '',
            patronymic: '',
            birthday: '',
            gender: true,
            document_type: 'паспорт',
            document_data: '',
            is_adult: action.payload.type === 'adult'
          },
          is_child: action.payload.type === 'child',
          seat_number: action.payload.index
        });
      }

      seat.isActive = !isActive;
    },

    addSeat: (state, action) => {
      const { placeInfo, direction } = action.payload;

      state.departure.seats = state.departure.seats.map((coach) => ({
        ...coach,
        seats: coach.seats.map((seat) =>
          seat.index === placeInfo.index
            ? { ...seat, isActive: true }
            : seat
        ),
      }));

      state.departure.price += placeInfo.price;

      state.departure.activeSeats.push({
        coach_id: placeInfo.coach_id,
        direction,
        price: placeInfo.price,
        person_info: {
          first_name: '',
          last_name: '',
          patronymic: '',
          birthday: '',
          gender: true,
          document_type: 'паспорт',
          document_data: '',
          is_adult: true,
        },
        seat_number: placeInfo.index,
        is_child: false,
      });
    },
    deleteSeat: (state, action) => {
      const { direction, seat_number, coach_id } = action.payload;
      const current = state[direction];

      const item = current.activeSeats.find(
        (seat) =>
          seat.seat_number === seat_number &&
          seat.coach_id === coach_id
      );

      if (!item) return;

      current.price -= item.price;

      current.activeSeats = current.activeSeats.filter(
        (seat) =>
          !(
            seat.seat_number === seat_number &&
            seat.coach_id === coach_id
          )
      );
    },
    addService: (state, action) => {
      const direction = action.payload.direction || 'departure';

      if (!state[direction].services[action.payload.id]) state[direction].services[action.payload.id] = {}
      state[direction].services[action.payload.id]   [action.payload.name] = action.payload.price


      state[direction].price += action.payload.price
    },
    deleteService: (state, action) => {
      const direction = action.payload.direction || 'departure';

      delete state[direction].services[action.payload.id][action.payload.name]
      state[direction].price -= action.payload.price
    },
    reset: (state, action) => {
      const direction = action.payload.direction || 'departure';

      state[direction].activeSeats.forEach(({ price }) => {
        state[direction].price -= price
      })
      state[direction].activeSeats = [];

      state[direction].seats.forEach((wagon) => {
        wagon.seats.forEach((seat) => {
          seat.isActive = false;
        });
      });
    },
    changeAge: (state, action) => {
      const item = state[action.payload.direction].activeSeats.find(
        ({ seat_number }) => seat_number === action.payload.seat_number
      )
      if (action.payload.age === 'Взрослый') {
        item.is_child = false;
        item.person_info.is_adult = true
      } else if (action.payload.age === 'Детский') {
        item.is_child = true;
        item.person_info.is_adult = false
      }
    }
    ,
    updateActiveSeats: (state, action) => {
      action.payload.data.forEach((item) => {
        const seat = state[item.direction]?.activeSeats?.find(
          ({ coach_id, seat_number }) =>
            item.coach_id === coach_id &&
            item.seat_number === seat_number
        );

        if (!seat) return;

        const info = seat.person_info;

        info.birthday = item.birthday;
        info.first_name = item.firstName;
        info.last_name = item.lastName;
        info.patronymic = item.patronymic;
        info.document_type = item.document_type;
        info.gender = item.gender;

        info.document_data =
          item.document_type === 'паспорт'
            ? `${item.document_series} ${item.document_number}`
            : item.document_data;
      });
    },
    saveInfo: (state, action) => {
      state.personalData = action.payload;
    },
    saveRouteParams: (state, action) => {
      const { id, params } = action.payload;

      state.routeId = id;

      const { id: _, ...cleanParams } = params;

      state.params = new URLSearchParams(cleanParams).toString();
    }
    ,
    resetAll: (state) => {
      state.personalData = {};
      state.routeId = '';
      state.departure = {
        seats: [],
        price: 0,
        activeSeats: [],
        services: {}
      };
      state.arrival = {}

    }
  }
  ,
  extraReducers: (builder) => {
    builder.addCase(getSeats.fulfilled, (state, action) => {

      state.departure = {
        seats: action.payload.data,
        price: 0,
        activeSeats: [],
        services: {}
      }
      state.ticket = action.payload.ticket;
      if (action.payload.ticket.arrival) {
        state.arrival = {
          seats: action.payload.data,
          price: 0,
          activeSeats: [],
          services: {}
        };
      }
    })


  }
})


export const {
  actions: ticketActions,
  reducer: tickerReducer
} = ticketSlice