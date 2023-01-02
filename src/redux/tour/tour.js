const GET_TOURS = 'GET_TOURS';
const allTours = [];

export const tours = (payload) => ({
  type: GET_TOURS,
  payload
});
export const getTrous = () => async (dispatch) => {
  const toursRes = await fetch('https://tour-booking.onrender.com/tours').then((data) => {
    return data.json();
  });
  dispatch(tours(toursRes));
};

const tourReducer = (state = allTours, action) => {
  switch (action.type) {
    case GET_TOURS:
      return action.payload;
    default:
      return state;
  }
};

export default tourReducer;
