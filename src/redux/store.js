import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userAuth';
import tourReducer from './tour/tour';

const store = configureStore({
  reducer: { user: userReducer, tours: tourReducer }
});

export default store;
