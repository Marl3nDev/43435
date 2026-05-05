export const personalDataSelector = (state) =>  state.ticket.personalData;
export const paramsSelector = (state) =>  state.ticket.params;
export const seatsSelector = (state, direction='departure') =>  state.ticket[direction].seats;
export const priceSelector = (state,direction='departure') => state.ticket[direction].price;
export const activeSeatsSelector = (state, direction='departure') => state.ticket[direction].activeSeats;
export const servicesSelector = (state, direction='departure') => state.ticket[direction].services;
export const ticketSelector = (state) => state.ticket.ticket;
