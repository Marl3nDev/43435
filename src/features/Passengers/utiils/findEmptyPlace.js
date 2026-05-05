export function findEmptyPlace(seats) {
  let activePlace = null;

  for (let i = 0; i < seats.length; i++) {
    const coachItem = seats[i];

    const seatIndex = coachItem.seats.findIndex(
      (s) => s.available && !s.isActive
    );

    if (seatIndex !== -1) {
      const prices = [
        coachItem.coach.bottom_price,
        coachItem.coach.side_price,
        coachItem.coach.top_price
      ].filter((price) => price > 0);

      const minPrice = prices.length ? Math.min(...prices) : 0;

      activePlace = {
        index: coachItem.seats[seatIndex].index,
        price: minPrice,
        coach_id: coachItem.coach._id
      };

      break;
    }
  }

  return activePlace;
}