const url = 'https://tour-booking.onrender.com/user_reservations';
const urlResserve = 'https://tour-booking.onrender.com/reserve';
const GET_RES = 'GET_RES';
const ADD_RES = 'ADD_RES';
const allRes = [];

export const reservations = (payload) => ({
  type: GET_RES,
  payload
});

export const reserve = (payload) => ({
  type: ADD_RES,
  payload
});

export const addReservation = (data, token) => async (dispatch) => {
  const res = await fetch(urlResserve, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data)
  });
  if (res.status === 200) {
    const final = await res.json();
    dispatch(reserve(final));
  }
};

export const getRes = (token) => async (dispatch) => {
  const result = await fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', Authorization: token }
  });
  const final = await result.json();
  dispatch(reservations(final));
};

const reservationsReducer = (state = allRes, action) => {
  switch (action.type) {
    case GET_RES:
      return action.payload;
    case ADD_RES:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default reservationsReducer;
