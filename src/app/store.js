import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/Authentication/AuthenticationSlice';
import postReducer from '../features/PostFeed/postSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    post: postReducer
  }
});
