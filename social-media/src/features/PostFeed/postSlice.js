import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_URL } from '../../utils/constants';
import axios from 'axios';

console.log("inside post slice");

const fetchPostById = createAsyncThunk(
    'posts/fetchPostById',
    async (userId, thunkAPI) => {
        //const response = await userAPI.fetchById(userId)
        //return response.data
    }
)

export const createPost = createAsyncThunk(
    "posts/createPost",
    async (postContent) => {
        console.log("inside create post ");
        try {
            const response = await axios.post(API_URL, postContent);
            console.log("res status "+response.status);
            return response.data;
        } catch (err) {
            console.error(err)
        }
    }
)

const getPosts = createAsyncThunk(
    'posts/getPosts',
    async (thunkAPI) => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts').then(
            (data) => data.json()
        )
        return res;
})

const postSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [],
        status: ""
    },
    extraReducers: {
        [getPosts.pending]: (state) => {
            state.status = 'pending';
        },
        [getPosts.fulfilled]: (state,action) => {
            state.posts.unshift(action.payload);
			state.status = 'succeeded';
        },
        [getPosts.rejected]: (state,action) => {
			state.status = 'failed';
        },
        [createPost.pending]: (state,action) => {
            console.log("inside create post pending");
            state.status = 'pending';
        },
        [createPost.fulfilled]: (state,action) => {
            console.log("inside create post fulfilled");
            state.posts = action.payload;
			state.status = 'succeeded';
        },
        [createPost.rejected]: (state,action) => {
            console.log("inside create post rejected");
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
const { actions, reducer } = postSlice;
export default postSlice;