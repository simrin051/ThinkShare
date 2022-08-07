import postsReducer from '../features/posts/postsSlice'
import { configureStore } from '@reduxjs/toolkit'

export const store =  configureStore({
  reducer: {
    posts: postsReducer
  }
})