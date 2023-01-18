const GET_TOURS = 'GET_TOURS';
const ADD_TOURS = 'ADD_TOURS';
const url = 'https://tour-booking.onrender.com/tours';
const allTours = [];

export const tours = (payload) => ({
  type: GET_TOURS,
  payload
});
export const newTour = (payload) => ({
  type: ADD_TOURS,
  payload
});
export const addTour = (data, token) => async (dispatch) => {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: token },
    body: JSON.stringify(data)
  });
  const final = await res.json();
  dispatch(newTour(final));
};
export const getTours = () => async (dispatch) => {
  const toursRes = await fetch('https://tour-booking.onrender.com/tours').then((data) => {
    return data.json();
  });
  dispatch(tours(toursRes));
};
export const removeTour = (token, id) => async (dispatch) => {
  // const remove = `https://tour-booking.onrender.com/tours/${id}`;
  const result = await fetch(`https://tour-booking.onrender.com/tours/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json', Authorization: token }
  });
  if (result.status === 200) {
    dispatch(getTours());
  }
};

const tourReducer = (state = allTours, action) => {
  switch (action.type) {
    case GET_TOURS:
      return action.payload;
    case ADD_TOURS:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default tourReducer;
