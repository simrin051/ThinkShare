import { configureStore } from '@reduxjs/toolkit';
import  {postSliceReducer } from '../features/PostFeed/postSlice';
import  {postsSliceReducer } from '../features/posts/postsSlice';

export const store =  configureStore({
  reducer: {
    postSliceReducer,
    postsSliceReducer
  }
});