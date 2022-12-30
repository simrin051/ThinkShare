import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/Authentication/AuthenticationSlice';
import postReducer from '../features/PostFeed/PostSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    post: postReducer
  }
});
