const LOGIN_USER = 'LOGIN_USER';
// const SIGNUP_USER = 'SIGNUP_USER';
const logged = false;
export const logInUser = (payload) => ({
  type: LOGIN_USER,
  payload
});

const userReducer = (state = logged, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return action.logged;
    default:
      return state;
  }
};

export default userReducer;
