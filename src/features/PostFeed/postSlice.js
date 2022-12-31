import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_URL } from '../../utils/constants';
import axios from 'axios';
import { createPost, deletePost, fetchPostById, getPosts, likePost } from './PostService';
import { addBookmark } from './BookMarkService';



export const postSlice = createSlice({
    name: "posts",
    initialState: {
       posts: []
    },
    reducers: {
        setPosts: (state,{payload}) =>{ 
            return  {
               posts : payload
               //.length>=payload.length?payload:state.posts.concat(payload)
              //  posts: state.posts.concat(payload)
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
        },
        [likePost.pending]:  (state,action) => {
            state.status = 'pending';
        },
        [likePost.fulfilled]:  (state,action) => {
    		state.status = 'succeeded';
        },
        [likePost.rejected]:  (state,action) => {
            state.status = 'failed';
        },
        [addBookmark.pending]: (state,action)=> {
            console.log(" add book mark pending")
        },
        [addBookmark.fulfilled]: (state,action)=> {
            console.log(" add book mark fulfilled")
        },
        [addBookmark.rejected]: (state,action)=> {
            console.log(" add book mark rejected")
        }
    }
});


export const {setPosts} =  postSlice.actions;
export default postSlice.reducer;