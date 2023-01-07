import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setBookmarks, setUser } from "./AuthenticationSlice";

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

export const getUser = createAsyncThunk("user/getUser",async (username,thunkAPI)=>{
  try {
    console.log(" username "+username);
    await axios.get(`/api/users/${username}`,{headers: {
      'Content-Type': 'application/json',
      }})
      .then(res=>{
        console.log(" response data "+JSON.stringify(res));
        thunkAPI.dispatch(setUser(res.data))
        });
    } catch(err) {
      console.log(" Error "+err);
      return thunkAPI.rejectWithValue(err.statusText);
    }
})
