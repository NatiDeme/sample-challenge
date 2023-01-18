import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userAuth';
import tourReducer from './tour/tour';
import reservationsReducer from './reservations/reservation';

const store = configureStore({
  reducer: { user: userReducer, tours: tourReducer, reservation: reservationsReducer }
});

export default store;
