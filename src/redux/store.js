import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userAuth';

export default configureStore({
  reducer: { user: userReducer }
});
