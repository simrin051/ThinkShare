import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getCookie } from "../../utils/AuthCookies";
import { tokenKey } from "../../utils/constants";
import { setPosts } from "./PostSlice";

export const fetchPostById = createAsyncThunk(
    'posts/fetchPostById',
    async (postId, thunkAPI) => {
        try {
          await axios.get(`/api/posts/${postId}`,{headers: {
                  'Content-Type': 'application/json'
                  }})
          } catch (err) {
              console.error(err)
          }
  
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
                thunkAPI.dispatch(setPosts(result.data.posts))
            });
    } catch (err) {
        thunkAPI.rejectWithValue(err);
    }
})

export const likePost = createAsyncThunk(
    'posts/likePost',async(postId,thunkAPI)=> {   
        try {
            await axios.post(`/api/posts/like/${postId}`,{headers : {
                'Content-Type': 'application/json'
            }
            }).then(result=>{
                thunkAPI.dispatch(setPosts(result.data.posts))
            })
          } catch (err) {
            console.log(err);
              thunkAPI.rejectWithValue(err);
          }
})

export const dislikePost = createAsyncThunk(
    'posts/dislikePost',async(postId,thunkAPI)=> {   
    try {
        await axios.post(`/api/posts/dislike/${postId}`,{headers: {
            'Content-Type': 'application/json',
             'authorization': getCookie(tokenKey)
            }}).then(result=>{
                thunkAPI.dispatch(setPosts(result.data.posts))
            })
    } catch(err) {
        console.log(err);
    }
})

export const editPost = createAsyncThunk('posts/editPost',async(editPostData,thunkAPI)=> {   
    const {postData,postId} = editPostData;
    console.log(" post id "+postId+" Post Data "+postData);
    try {
        await axios.post(`/api/posts/edit/${postId}`,{postData},{headers: {
            'Content-Type': 'application/json',
             'authorization': getCookie(tokenKey)
            }}).then(result=>{
                thunkAPI.dispatch(setPosts(result.data.posts))
            })
    } catch(err) {
        console.log(err);
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


