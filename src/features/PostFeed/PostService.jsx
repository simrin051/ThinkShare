import { Store } from "@mui/icons-material";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useDispatch } from "react-redux";
import { store } from "../../app/store";
import { getCookie, tokenKey } from "../../utils/AuthCookies";
import { setPosts } from "./PostSlice";

export const fetchPostById = createAsyncThunk(
    'posts/fetchPostById',
    async (userId, thunkAPI) => {
        //const response = await userAPI.fetchById(userId)
        //return response.data
    }
)

export const createPost = createAsyncThunk(
    "posts/createPost",
    async (postData,thunkAPI) => {
        try {
          await axios.post("/api/posts", {postData},{headers: {
                'Content-Type': 'application/json',
                 'authorization': getCookie(tokenKey)
                }}).then(result=>{
                    thunkAPI.dispatch(setPosts(result.data.posts))
                });
        } catch (err) {
            console.error(err)
        }
    }
)

export const deletePost = createAsyncThunk("posts/deletePost",
async (postId,thunkAPI) => {
    try {
      await axios.delete(`/api/posts/${postId}`,{headers: {
            'Content-Type': 'application/json',
             'authorization': getCookie(tokenKey)
            }}).then(result=>{
                console.log("length of posts -- delete post "+result.data.posts.length);
                thunkAPI.dispatch(setPosts(result.data.posts))
            });
    } catch (err) {
        thunkAPI.rejectWithValue(err);
    }
})

export const getPosts = createAsyncThunk(
    'posts/getPosts',async(_,thunkAPI)=> {   
     await axios.get('/api/posts',{headers: {
            'Content-Type': 'application/json',
             'authorization': getCookie(tokenKey)
            }}).then(result => {
                thunkAPI.dispatch(setPosts(result.data.posts))
              }).catch ( err=> {
               })
})


