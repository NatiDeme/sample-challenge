import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userAuth';

const store = configureStore({
  reducer: { user: userReducer }
});

export default store;
