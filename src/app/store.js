import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/Authentication/AuthSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer
  }
});
