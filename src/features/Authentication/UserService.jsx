import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setBookmarks } from "./AuthenticationSlice";

export const getBookMarks = createAsyncThunk("bookmarks/getBookmarks",async (body,thunkAPI)=>{
    try {
    await axios.get("/api/users/bookmark/",{headers: {
      'Content-Type': 'application/json',
      }}).then(res=>{ thunkAPI.dispatch(setBookmarks(res.data.bookmarks));})
    } catch(err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err.statusText);
    }
})

export const getUser = createAsyncThunk("user/getUser",async (userId,{thunkAPI, rejectWithValue })=>{
  console.log("inside get user"); 
  try {
    await axios.get(`/api/users/${userId}`,{headers: {
      'Content-Type': 'application/json',
      }})
      .then(res=>{
        console.log(" response data user "+JSON.stringify(res.data.user));
        });
    } catch(err) {
      console.log(err);
      return rejectWithValue(err.statusText);
    }
})
