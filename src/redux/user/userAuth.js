const LOGIN_USER = 'LOGIN_USER';
const LOGIN = 'https://tour-booking.onrender.com/login';
const SIGNUP = 'https://tour-booking.onrender.com/signup';
const SIGNUP_USER = 'SIGNUP_USER';
const user = [];
export const logInUser = (payload) => ({
  type: LOGIN_USER,
  payload
});
export const signUp = (payload) => ({
  type: SIGNUP_USER,
  payload
});
export const authUser = (data) => async (dispatch) => {
  const res = await fetch(LOGIN, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  if (res.status === 200) {
    const final = await res.json();
    dispatch(logInUser(final));
  }
};

export const signUpUser = (data) => async (dispatch) => {
  const res = await fetch(SIGNUP, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  if (res.status === 200) {
    const final = await res.json();
    dispatch(signUp(final));
  }
};

const userReducer = (state = user, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return action.payload;
    case SIGNUP_USER:
      return action.payload;
    default:
      return state;
  }
};

export default userReducer;
