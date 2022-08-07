import { createSlice } from '@reduxjs/toolkit'


const initialState = [];

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    createPost(state, action) {
      console.log("create post");
      state.push(action.payload);
    }
  }
})

export const { postAdded } = postsSlice.actions
export default postsSlice.reducer