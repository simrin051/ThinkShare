import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getCookie } from "../../utils/AuthCookies";
import { tokenKey } from "../../utils/constants";

export const addBookmark = createAsyncThunk(
    'bookmark/addBookmark',async(postId,thunkAPI)=> {   
        try {
            await axios.post(`/api/users/bookmark/${postId}`,{headers: {
                  'Content-Type': 'application/json',
                   'authorization': getCookie(tokenKey)
                  }}).then((res)=>{})
          } catch (err) {
                console.log("book mark "+err);
              thunkAPI.rejectWithValue(err);
          }
})

export const removeBookmark = createAsyncThunk(
    'bookmark/removeBookmark',async(postId,thunkAPI)=> {   
        try {
            await axios.post(`/api/users/remove-bookmark/${postId}`,{headers: {
                  'Content-Type': 'application/json',
                   'authorization': getCookie(tokenKey)
                  }}).then((res)=>{console.log(res)})
          } catch (err) {
              thunkAPI.rejectWithValue(err);
          }
})


export const getBookmarks = createAsyncThunk(
    'bookmark/getBookmarks',async(thunkAPI)=> {   
        try {
            await axios.post(`/api/users/bookmark/`,{headers: {
                  'Content-Type': 'application/json',
                   'authorization': getCookie(tokenKey)
                  }}).then((res)=>{console.log(res)})
          } catch (err) {
              thunkAPI.rejectWithValue(err);
          }
})