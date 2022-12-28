import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_URL } from '../../utils/constants';
import axios from 'axios';
import { createPost, deletePost, fetchPostById, getPosts } from './PostService';



export const postSlice = createSlice({
    name: "posts",
    initialState: {
       posts: []
    },
    reducers: {
        setPosts: (state,{payload}) =>{ 
           return  {
                posts : state.posts.length>payload.length?payload:state.posts.concat(payload)
            } 
        }
    
    },
    extraReducers: {
        [getPosts.pending]: (state) => {
            state.status = 'pending';
        },
        [getPosts.fulfilled]: (state,action) => {
        },
        [getPosts.rejected]: (state,action) => {
			state.status = 'failed';
        },
        [createPost.pending]: (state,action) => {
            state.status = 'pending';
        },
        [createPost.fulfilled]: (state,action) => {
     		state.status = 'succeeded';
        },
        [createPost.rejected]: (state,action) => {
            state.status = 'failed';
        },
        
        [deletePost.pending]: (state,action) => {
            state.status = 'pending';
        },
        [deletePost.fulfilled]: (state,action) => {
     		state.status = 'succeeded';
        },
        [deletePost.rejected]: (state,action) => {
            state.status = 'failed';
        },
        [fetchPostById.pending]:  (state,action) => {
            state.status = 'pending';
        },
        [fetchPostById.fulfilled]:  (state,action) => {
            state.posts = action.payload;
			state.status = 'succeeded';
        },
        [fetchPostById.rejected]:  (state,action) => {
            state.status = 'failed';
        }
    }
});


export const {setPosts} =  postSlice.actions;
export default postSlice.reducer;