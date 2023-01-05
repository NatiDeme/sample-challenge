const url = 'https://tour-booking.onrender.com/user_reservations';
const GET_RES = 'GET_RES';
const allRes = [];

export const reservations = (payload) => ({
  type: GET_RES,
  payload
});

export const getRes = () => async (dispatch) => {
  const result = await fetch(url, {
    method: 'GET'
  });
  dispatch(reservations(result));
};

const reservationsReducer = (state = allRes, action) => {
  switch (action.type) {
    case GET_RES:
      return action.payload;
    default:
      return state;
  }
};

export default reservationsReducer;
