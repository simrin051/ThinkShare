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
                    console.log(" inside create post ");
                    console.log(JSON.stringify(result.data.posts[result.data.posts.length-1]));
                    thunkAPI.dispatch(setPosts(result.data.posts))
                });
        } catch (err) {
            console.error(err)
        }
    }
)

export const getPosts = createAsyncThunk(
    'posts/getPosts',async(_,thunkAPI)=> {   
     await axios.get('/api/posts',{headers: {
            'Content-Type': 'application/json',
             'authorization': getCookie(tokenKey)
            }}).then(result => {
                console.log(" length of data posts "+JSON.stringify(result.data.posts[0].username));
                thunkAPI.dispatch(setPosts(result.data.posts))
              }).catch ( err=> {
               })
})
